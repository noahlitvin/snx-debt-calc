const path = require('path');
const sqlite3 = require("better-sqlite3");
const groupBy = require("lodash/groupBy");
const findIndex = require("lodash/findIndex");
const ObjectsToCsv = require('objects-to-csv');

async function createDebtTables(db) {
    await db.exec(`CREATE TABLE IF NOT EXISTS DebtSnapshots (
        id TEXT PRIMARY KEY NOT NULL,
        block INTEGER NOT NULL,
        timestamp INTEGER NOT NULL,
        account TEXT NOT NULL,
        balanceOf REAL NOT NULL,
        collateral REAL NOT NULL,
        debtBalanceOf REAL NOT NULL
      );`);

    await db.exec(`CREATE TABLE IF NOT EXISTS DebtStates (
        id TEXT NOT NULL,
        timestamp INTEGER NOT NULL,
        debtEntry REAL NOT NULL,
        totalIssuedSynths REAL NOT NULL,
        debtRatio REAL NOT NULL
      );`);
}

async function getOldDebtDB() {
    const db = sqlite3(
        path.join(__dirname, "./data/snxDebt-preRegenesis.sqlite")
    );
    await createDebtTables(db);
    return db;
}

async function selectAllDebtStates(db) {
    const statement = `SELECT * FROM DebtStates`;
    return db.prepare(statement).all();
}

async function selectAllFromDebtSnapshots(db) {
    const statement = `SELECT * FROM DebtSnapshots`;
    return db.prepare(statement).all();
}

const runner = async () => {
    const debtStates = await selectAllDebtStates(await getOldDebtDB());
    const debtSnapshots = await selectAllFromDebtSnapshots(await getOldDebtDB());

    let userDebtPercentages = {}
    let userDebtTotals = {}

    let debtSnapshotsByUser = groupBy(debtSnapshots, "account");
    let progress = 0

    for (const [address, debtSnapshots] of Object.entries(debtSnapshotsByUser)) {
        let currentDebtSnapshotIndex = 0
        let debtStateAsOfDebtSnapshotIndex = findIndex(debtStates, (ds) => ds.timestamp < debtSnapshots[currentDebtSnapshotIndex].timestamp)
        userDebtPercentages[address] = {}
        userDebtTotals[address] = {}

        for (debtState of debtStates.slice(debtStateAsOfDebtSnapshotIndex)) {
            if (currentDebtSnapshotIndex < debtSnapshots.length - 1 && debtSnapshots[currentDebtSnapshotIndex + 1].timestamp < debtState.timestamp) {
                currentDebtSnapshotIndex++;
                debtStateAsOfDebtSnapshotIndex = findIndex(debtStates, (ds) => ds.timestamp < debtSnapshots[currentDebtSnapshotIndex].timestamp)
            }

            const currentDebtSnapshot = debtSnapshots[currentDebtSnapshotIndex]
            const debtStateAsOfDebtSnapshot = debtStates[debtStateAsOfDebtSnapshotIndex]
            userDebtPercentages[address][debtState.timestamp] = (currentDebtSnapshot.debtBalanceOf / debtState.totalIssuedSynths) * debtStateAsOfDebtSnapshot.debtRatio / debtState.debtRatio
            userDebtTotals[address][debtState.timestamp] = currentDebtSnapshot.debtBalanceOf * debtStateAsOfDebtSnapshot.debtRatio / debtState.debtRatio
        }

        progress++
        console.log((progress / Object.entries(debtSnapshotsByUser).length * 100).toFixed(2) + "%")
    }

    const exportArray = (dataByAccount) => Object.keys(dataByAccount).map(function (key) {
        let rowData = { "0_address": key }
        Object.entries(dataByAccount[key]).forEach(entry => {
            rowData[entry[0].toString()] = entry[1].toFixed(18);
        })
        return rowData
    });
    const csv1 = new ObjectsToCsv(exportArray(userDebtPercentages));
    csv1.toDisk('./debtPercentages.csv', { allColumns: true });
    const csv2 = new ObjectsToCsv(exportArray(userDebtTotals));
    csv2.toDisk('./debtTotals.csv', { allColumns: true });
};

runner();
