const groupBy = require("lodash/groupBy");
const findIndex = require("lodash/findIndex");
const ObjectsToCsv = require('objects-to-csv');
const getDebtStates = require('./synthetix-subgraph.js').getDebtStates;
const getDebtSnapshots = require('./synthetix-subgraph.js').getDebtSnapshots;

const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main';

const runner = async () => {
    const debtStates = await getDebtStates(SUBGRAPH_URL, { first: 100000, orderBy: 'timestamp', orderDirection: 'asc' }, { timestamp: true, debtRatio: true, totalIssuedSynths: true });
    const debtSnapshots = await getDebtSnapshots(SUBGRAPH_URL, { first: 100000, orderBy: 'timestamp', orderDirection: 'asc' }, { timestamp: true, account: true, debtBalanceOf: true });

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
