"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFifteenMinuteSNXPrices = exports.getFifteenMinuteSNXPriceById = exports.getFeesClaimeds = exports.getFeesClaimedById = exports.getExchangers = exports.getExchangerById = exports.getExchangeReclaims = exports.getExchangeReclaimById = exports.getExchangeRebates = exports.getExchangeRebateById = exports.getExchangePartners = exports.getExchangePartnerById = exports.getExchangeFees = exports.getExchangeFeeById = exports.getExchangeEntrySettleds = exports.getExchangeEntrySettledById = exports.getExchangeEntryAppendeds = exports.getExchangeEntryAppendedById = exports.getDelegatedWallets = exports.getDelegatedWalletById = exports.getDebtStates = exports.getDebtStateById = exports.getDebtSnapshots = exports.getDebtSnapshotById = exports.getDailySNXPrices = exports.getDailySNXPriceById = exports.getDailyIssueds = exports.getDailyIssuedById = exports.getDailyExchangePartners = exports.getDailyExchangePartnerById = exports.getDailyCandles = exports.getDailyCandleById = exports.getDailyBurneds = exports.getDailyBurnedById = exports.getCollateralWithdrawns = exports.getCollateralWithdrawnById = exports.getCollateralDepositeds = exports.getCollateralDepositedById = exports.getBurneds = exports.getBurnedById = exports.getAtomicSynthExchanges = exports.getAtomicSynthExchangeById = exports.getActiveStakers = exports.getActiveStakerById = exports.getAccountRemovedFromLiquidations = exports.getAccountRemovedFromLiquidationById = exports.getAccountLiquidateds = exports.getAccountLiquidatedById = exports.getAccountFlaggedForLiquidations = exports.getAccountFlaggedForLiquidationById = void 0;
exports.getTotals = exports.getTotalById = exports.getTemporaryExchangePartnerTrackers = exports.getTemporaryExchangePartnerTrackerById = exports.getSynthetixs = exports.getSynthetixById = exports.getSynthExchanges = exports.getSynthExchangeById = exports.getSynthByCurrencyKeys = exports.getSynthByCurrencyKeyById = exports.getSynthBalances = exports.getSynthBalanceById = exports.getSynths = exports.getSynthById = exports.getShortLoanChanges = exports.getShortLoanChangeById = exports.getShortLiquidations = exports.getShortLiquidationById = exports.getShortContractUpdates = exports.getShortContractUpdateById = exports.getShortContracts = exports.getShortContractById = exports.getShortCollateralChanges = exports.getShortCollateralChangeById = exports.getShorts = exports.getShortById = exports.getSNXHolders = exports.getSNXHolderById = exports.getRewardEscrowHolders = exports.getRewardEscrowHolderById = exports.getRateUpdates = exports.getRateUpdateById = exports.getLoanRepaids = exports.getLoanRepaidById = exports.getLoanPartiallyLiquidateds = exports.getLoanPartiallyLiquidatedById = exports.getLoanLiquidateds = exports.getLoanLiquidatedById = exports.getLoans = exports.getLoanById = exports.getLatestSynthBalances = exports.getLatestSynthBalanceById = exports.getLatestRates = exports.getLatestRateById = exports.getIssuers = exports.getIssuerById = exports.getIssueds = exports.getIssuedById = exports.getInversePricingInfos = exports.getInversePricingInfoById = void 0;
exports.getWrapperMints = exports.getWrapperMintById = exports.getWrapperBurns = exports.getWrapperBurnById = exports.getWrappers = exports.getWrapperById = exports.getTotalDailyActiveStakers = exports.getTotalDailyActiveStakerById = exports.getTotalActiveStakers = exports.getTotalActiveStakerById = void 0;
var wei_1 = require("@synthetixio/wei");
var axios_1 = require("codegen-graph-ts/build/src/lib/axios");
var gql_1 = require("codegen-graph-ts/build/src/lib/gql");
var MAX_PAGE = 1000;
var getAccountFlaggedForLiquidationById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('accountFlaggedForLiquidation', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['deadline'])
                        formattedObj['deadline'] = (0, wei_1.wei)(obj['deadline'], 0);
                    if (obj['collateralRatio'])
                        formattedObj['collateralRatio'] = (0, wei_1.wei)(obj['collateralRatio'], 0);
                    if (obj['liquidatableNonEscrowSNX'])
                        formattedObj['liquidatableNonEscrowSNX'] = (0, wei_1.wei)(obj['liquidatableNonEscrowSNX']);
                    if (obj['collateral'])
                        formattedObj['collateral'] = (0, wei_1.wei)(obj['collateral']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getAccountFlaggedForLiquidationById = getAccountFlaggedForLiquidationById;
var getAccountFlaggedForLiquidations = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('accountFlaggedForLiquidations', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['deadline'])
                            formattedObj['deadline'] = (0, wei_1.wei)(obj['deadline'], 0);
                        if (obj['collateralRatio'])
                            formattedObj['collateralRatio'] = (0, wei_1.wei)(obj['collateralRatio'], 0);
                        if (obj['liquidatableNonEscrowSNX'])
                            formattedObj['liquidatableNonEscrowSNX'] = (0, wei_1.wei)(obj['liquidatableNonEscrowSNX']);
                        if (obj['collateral'])
                            formattedObj['collateral'] = (0, wei_1.wei)(obj['collateral']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getAccountFlaggedForLiquidations = getAccountFlaggedForLiquidations;
var getAccountLiquidatedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('accountLiquidated', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['snxRedeemed'])
                        formattedObj['snxRedeemed'] = (0, wei_1.wei)(obj['snxRedeemed']);
                    if (obj['amountLiquidated'])
                        formattedObj['amountLiquidated'] = (0, wei_1.wei)(obj['amountLiquidated']);
                    if (obj['liquidator'])
                        formattedObj['liquidator'] = obj['liquidator'];
                    if (obj['time'])
                        formattedObj['time'] = (0, wei_1.wei)(obj['time'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getAccountLiquidatedById = getAccountLiquidatedById;
var getAccountLiquidateds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('accountLiquidateds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['snxRedeemed'])
                            formattedObj['snxRedeemed'] = (0, wei_1.wei)(obj['snxRedeemed']);
                        if (obj['amountLiquidated'])
                            formattedObj['amountLiquidated'] = (0, wei_1.wei)(obj['amountLiquidated']);
                        if (obj['liquidator'])
                            formattedObj['liquidator'] = obj['liquidator'];
                        if (obj['time'])
                            formattedObj['time'] = (0, wei_1.wei)(obj['time'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getAccountLiquidateds = getAccountLiquidateds;
var getAccountRemovedFromLiquidationById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('accountRemovedFromLiquidation', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['time'])
                        formattedObj['time'] = (0, wei_1.wei)(obj['time'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getAccountRemovedFromLiquidationById = getAccountRemovedFromLiquidationById;
var getAccountRemovedFromLiquidations = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('accountRemovedFromLiquidations', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['time'])
                            formattedObj['time'] = (0, wei_1.wei)(obj['time'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getAccountRemovedFromLiquidations = getAccountRemovedFromLiquidations;
var getActiveStakerById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('activeStaker', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getActiveStakerById = getActiveStakerById;
var getActiveStakers = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('activeStakers', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getActiveStakers = getActiveStakers;
var getAtomicSynthExchangeById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('atomicSynthExchange', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['fromSynth'])
                        formattedObj['fromSynth'] = obj['fromSynth'];
                    if (obj['toSynth'])
                        formattedObj['toSynth'] = obj['toSynth'];
                    if (obj['fromAmount'])
                        formattedObj['fromAmount'] = (0, wei_1.wei)(obj['fromAmount']);
                    if (obj['fromAmountInUSD'])
                        formattedObj['fromAmountInUSD'] = (0, wei_1.wei)(obj['fromAmountInUSD']);
                    if (obj['toAmount'])
                        formattedObj['toAmount'] = (0, wei_1.wei)(obj['toAmount']);
                    if (obj['toAmountInUSD'])
                        formattedObj['toAmountInUSD'] = (0, wei_1.wei)(obj['toAmountInUSD']);
                    if (obj['feesInUSD'])
                        formattedObj['feesInUSD'] = (0, wei_1.wei)(obj['feesInUSD']);
                    if (obj['toAddress'])
                        formattedObj['toAddress'] = obj['toAddress'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['gasPrice'])
                        formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getAtomicSynthExchangeById = getAtomicSynthExchangeById;
var getAtomicSynthExchanges = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('atomicSynthExchanges', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['fromSynth'])
                            formattedObj['fromSynth'] = obj['fromSynth'];
                        if (obj['toSynth'])
                            formattedObj['toSynth'] = obj['toSynth'];
                        if (obj['fromAmount'])
                            formattedObj['fromAmount'] = (0, wei_1.wei)(obj['fromAmount']);
                        if (obj['fromAmountInUSD'])
                            formattedObj['fromAmountInUSD'] = (0, wei_1.wei)(obj['fromAmountInUSD']);
                        if (obj['toAmount'])
                            formattedObj['toAmount'] = (0, wei_1.wei)(obj['toAmount']);
                        if (obj['toAmountInUSD'])
                            formattedObj['toAmountInUSD'] = (0, wei_1.wei)(obj['toAmountInUSD']);
                        if (obj['feesInUSD'])
                            formattedObj['feesInUSD'] = (0, wei_1.wei)(obj['feesInUSD']);
                        if (obj['toAddress'])
                            formattedObj['toAddress'] = obj['toAddress'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['gasPrice'])
                            formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getAtomicSynthExchanges = getAtomicSynthExchanges;
var getBurnedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('burned', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['value'])
                        formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                    if (obj['source'])
                        formattedObj['source'] = obj['source'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['gasPrice'])
                        formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                    if (obj['block'])
                        formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getBurnedById = getBurnedById;
var getBurneds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('burneds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['value'])
                            formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                        if (obj['source'])
                            formattedObj['source'] = obj['source'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['gasPrice'])
                            formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                        if (obj['block'])
                            formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getBurneds = getBurneds;
var getCollateralDepositedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('collateralDeposited', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['collateralAmount'])
                        formattedObj['collateralAmount'] = (0, wei_1.wei)(obj['collateralAmount']);
                    if (obj['collateralAfter'])
                        formattedObj['collateralAfter'] = (0, wei_1.wei)(obj['collateralAfter']);
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['loanId'])
                        formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getCollateralDepositedById = getCollateralDepositedById;
var getCollateralDepositeds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('collateralDepositeds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['collateralAmount'])
                            formattedObj['collateralAmount'] = (0, wei_1.wei)(obj['collateralAmount']);
                        if (obj['collateralAfter'])
                            formattedObj['collateralAfter'] = (0, wei_1.wei)(obj['collateralAfter']);
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['loanId'])
                            formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getCollateralDepositeds = getCollateralDepositeds;
var getCollateralWithdrawnById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('collateralWithdrawn', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['amountWithdrawn'])
                        formattedObj['amountWithdrawn'] = (0, wei_1.wei)(obj['amountWithdrawn']);
                    if (obj['collateralAfter'])
                        formattedObj['collateralAfter'] = (0, wei_1.wei)(obj['collateralAfter']);
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['loanId'])
                        formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getCollateralWithdrawnById = getCollateralWithdrawnById;
var getCollateralWithdrawns = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('collateralWithdrawns', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['amountWithdrawn'])
                            formattedObj['amountWithdrawn'] = (0, wei_1.wei)(obj['amountWithdrawn']);
                        if (obj['collateralAfter'])
                            formattedObj['collateralAfter'] = (0, wei_1.wei)(obj['collateralAfter']);
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['loanId'])
                            formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getCollateralWithdrawns = getCollateralWithdrawns;
var getDailyBurnedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('dailyBurned', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['value'])
                        formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                    if (obj['totalDebt'])
                        formattedObj['totalDebt'] = (0, wei_1.wei)(obj['totalDebt']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getDailyBurnedById = getDailyBurnedById;
var getDailyBurneds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('dailyBurneds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['value'])
                            formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                        if (obj['totalDebt'])
                            formattedObj['totalDebt'] = (0, wei_1.wei)(obj['totalDebt']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getDailyBurneds = getDailyBurneds;
var getDailyCandleById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('dailyCandle', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['synth'])
                        formattedObj['synth'] = obj['synth'];
                    if (obj['open'])
                        formattedObj['open'] = (0, wei_1.wei)(obj['open']);
                    if (obj['high'])
                        formattedObj['high'] = (0, wei_1.wei)(obj['high']);
                    if (obj['low'])
                        formattedObj['low'] = (0, wei_1.wei)(obj['low']);
                    if (obj['close'])
                        formattedObj['close'] = (0, wei_1.wei)(obj['close']);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getDailyCandleById = getDailyCandleById;
var getDailyCandles = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('dailyCandles', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['synth'])
                            formattedObj['synth'] = obj['synth'];
                        if (obj['open'])
                            formattedObj['open'] = (0, wei_1.wei)(obj['open']);
                        if (obj['high'])
                            formattedObj['high'] = (0, wei_1.wei)(obj['high']);
                        if (obj['low'])
                            formattedObj['low'] = (0, wei_1.wei)(obj['low']);
                        if (obj['close'])
                            formattedObj['close'] = (0, wei_1.wei)(obj['close']);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getDailyCandles = getDailyCandles;
var getDailyExchangePartnerById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('dailyExchangePartner', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['usdVolume'])
                        formattedObj['usdVolume'] = (0, wei_1.wei)(obj['usdVolume']);
                    if (obj['usdFees'])
                        formattedObj['usdFees'] = (0, wei_1.wei)(obj['usdFees']);
                    if (obj['trades'])
                        formattedObj['trades'] = (0, wei_1.wei)(obj['trades'], 0);
                    if (obj['partner'])
                        formattedObj['partner'] = obj['partner'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getDailyExchangePartnerById = getDailyExchangePartnerById;
var getDailyExchangePartners = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('dailyExchangePartners', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['usdVolume'])
                            formattedObj['usdVolume'] = (0, wei_1.wei)(obj['usdVolume']);
                        if (obj['usdFees'])
                            formattedObj['usdFees'] = (0, wei_1.wei)(obj['usdFees']);
                        if (obj['trades'])
                            formattedObj['trades'] = (0, wei_1.wei)(obj['trades'], 0);
                        if (obj['partner'])
                            formattedObj['partner'] = obj['partner'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getDailyExchangePartners = getDailyExchangePartners;
var getDailyIssuedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('dailyIssued', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['value'])
                        formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                    if (obj['totalDebt'])
                        formattedObj['totalDebt'] = (0, wei_1.wei)(obj['totalDebt']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getDailyIssuedById = getDailyIssuedById;
var getDailyIssueds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('dailyIssueds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['value'])
                            formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                        if (obj['totalDebt'])
                            formattedObj['totalDebt'] = (0, wei_1.wei)(obj['totalDebt']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getDailyIssueds = getDailyIssueds;
var getDailySNXPriceById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('dailySNXPrice', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['count'])
                        formattedObj['count'] = (0, wei_1.wei)(obj['count'], 0);
                    if (obj['averagePrice'])
                        formattedObj['averagePrice'] = (0, wei_1.wei)(obj['averagePrice']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getDailySNXPriceById = getDailySNXPriceById;
var getDailySNXPrices = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('dailySNXPrices', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['count'])
                            formattedObj['count'] = (0, wei_1.wei)(obj['count'], 0);
                        if (obj['averagePrice'])
                            formattedObj['averagePrice'] = (0, wei_1.wei)(obj['averagePrice']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getDailySNXPrices = getDailySNXPrices;
var getDebtSnapshotById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('debtSnapshot', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['block'])
                        formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['balanceOf'])
                        formattedObj['balanceOf'] = (0, wei_1.wei)(obj['balanceOf']);
                    if (obj['collateral'])
                        formattedObj['collateral'] = (0, wei_1.wei)(obj['collateral']);
                    if (obj['debtBalanceOf'])
                        formattedObj['debtBalanceOf'] = (0, wei_1.wei)(obj['debtBalanceOf']);
                    if (obj['initialDebtOwnership'])
                        formattedObj['initialDebtOwnership'] = (0, wei_1.wei)(obj['initialDebtOwnership']);
                    if (obj['debtEntryAtIndex'])
                        formattedObj['debtEntryAtIndex'] = (0, wei_1.wei)(obj['debtEntryAtIndex'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getDebtSnapshotById = getDebtSnapshotById;
var getDebtSnapshots = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('debtSnapshots', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['block'])
                            formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['balanceOf'])
                            formattedObj['balanceOf'] = (0, wei_1.wei)(obj['balanceOf']);
                        if (obj['collateral'])
                            formattedObj['collateral'] = (0, wei_1.wei)(obj['collateral']);
                        if (obj['debtBalanceOf'])
                            formattedObj['debtBalanceOf'] = (0, wei_1.wei)(obj['debtBalanceOf']);
                        if (obj['initialDebtOwnership'])
                            formattedObj['initialDebtOwnership'] = (0, wei_1.wei)(obj['initialDebtOwnership']);
                        if (obj['debtEntryAtIndex'])
                            formattedObj['debtEntryAtIndex'] = (0, wei_1.wei)(obj['debtEntryAtIndex'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getDebtSnapshots = getDebtSnapshots;
var getDebtStateById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('debtState', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['debtEntry'])
                        formattedObj['debtEntry'] = (0, wei_1.wei)(obj['debtEntry']);
                    if (obj['totalIssuedSynths'])
                        formattedObj['totalIssuedSynths'] = (0, wei_1.wei)(obj['totalIssuedSynths']);
                    if (obj['debtRatio'])
                        formattedObj['debtRatio'] = (0, wei_1.wei)(obj['debtRatio']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getDebtStateById = getDebtStateById;
var getDebtStates = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('debtStates', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['debtEntry'])
                            formattedObj['debtEntry'] = (0, wei_1.wei)(obj['debtEntry']);
                        if (obj['totalIssuedSynths'])
                            formattedObj['totalIssuedSynths'] = (0, wei_1.wei)(obj['totalIssuedSynths']);
                        if (obj['debtRatio'])
                            formattedObj['debtRatio'] = (0, wei_1.wei)(obj['debtRatio']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getDebtStates = getDebtStates;
var getDelegatedWalletById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('delegatedWallet', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['authoriser'])
                        formattedObj['authoriser'] = obj['authoriser'];
                    if (obj['delegate'])
                        formattedObj['delegate'] = obj['delegate'];
                    if (obj['canMint'])
                        formattedObj['canMint'] = obj['canMint'];
                    if (obj['canBurn'])
                        formattedObj['canBurn'] = obj['canBurn'];
                    if (obj['canClaim'])
                        formattedObj['canClaim'] = obj['canClaim'];
                    if (obj['canExchange'])
                        formattedObj['canExchange'] = obj['canExchange'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getDelegatedWalletById = getDelegatedWalletById;
var getDelegatedWallets = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('delegatedWallets', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['authoriser'])
                            formattedObj['authoriser'] = obj['authoriser'];
                        if (obj['delegate'])
                            formattedObj['delegate'] = obj['delegate'];
                        if (obj['canMint'])
                            formattedObj['canMint'] = obj['canMint'];
                        if (obj['canBurn'])
                            formattedObj['canBurn'] = obj['canBurn'];
                        if (obj['canClaim'])
                            formattedObj['canClaim'] = obj['canClaim'];
                        if (obj['canExchange'])
                            formattedObj['canExchange'] = obj['canExchange'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getDelegatedWallets = getDelegatedWallets;
var getExchangeEntryAppendedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('exchangeEntryAppended', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['src'])
                        formattedObj['src'] = obj['src'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['dest'])
                        formattedObj['dest'] = obj['dest'];
                    if (obj['amountReceived'])
                        formattedObj['amountReceived'] = (0, wei_1.wei)(obj['amountReceived']);
                    if (obj['exchangeFeeRate'])
                        formattedObj['exchangeFeeRate'] = (0, wei_1.wei)(obj['exchangeFeeRate']);
                    if (obj['roundIdForSrc'])
                        formattedObj['roundIdForSrc'] = (0, wei_1.wei)(obj['roundIdForSrc'], 0);
                    if (obj['roundIdForDest'])
                        formattedObj['roundIdForDest'] = (0, wei_1.wei)(obj['roundIdForDest'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getExchangeEntryAppendedById = getExchangeEntryAppendedById;
var getExchangeEntryAppendeds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('exchangeEntryAppendeds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['src'])
                            formattedObj['src'] = obj['src'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['dest'])
                            formattedObj['dest'] = obj['dest'];
                        if (obj['amountReceived'])
                            formattedObj['amountReceived'] = (0, wei_1.wei)(obj['amountReceived']);
                        if (obj['exchangeFeeRate'])
                            formattedObj['exchangeFeeRate'] = (0, wei_1.wei)(obj['exchangeFeeRate']);
                        if (obj['roundIdForSrc'])
                            formattedObj['roundIdForSrc'] = (0, wei_1.wei)(obj['roundIdForSrc'], 0);
                        if (obj['roundIdForDest'])
                            formattedObj['roundIdForDest'] = (0, wei_1.wei)(obj['roundIdForDest'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getExchangeEntryAppendeds = getExchangeEntryAppendeds;
var getExchangeEntrySettledById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('exchangeEntrySettled', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['from'])
                        formattedObj['from'] = obj['from'];
                    if (obj['src'])
                        formattedObj['src'] = obj['src'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['dest'])
                        formattedObj['dest'] = obj['dest'];
                    if (obj['reclaim'])
                        formattedObj['reclaim'] = (0, wei_1.wei)(obj['reclaim']);
                    if (obj['rebate'])
                        formattedObj['rebate'] = (0, wei_1.wei)(obj['rebate']);
                    if (obj['srcRoundIdAtPeriodEnd'])
                        formattedObj['srcRoundIdAtPeriodEnd'] = (0, wei_1.wei)(obj['srcRoundIdAtPeriodEnd'], 0);
                    if (obj['destRoundIdAtPeriodEnd'])
                        formattedObj['destRoundIdAtPeriodEnd'] = (0, wei_1.wei)(obj['destRoundIdAtPeriodEnd'], 0);
                    if (obj['exchangeTimestamp'])
                        formattedObj['exchangeTimestamp'] = (0, wei_1.wei)(obj['exchangeTimestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getExchangeEntrySettledById = getExchangeEntrySettledById;
var getExchangeEntrySettleds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('exchangeEntrySettleds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['from'])
                            formattedObj['from'] = obj['from'];
                        if (obj['src'])
                            formattedObj['src'] = obj['src'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['dest'])
                            formattedObj['dest'] = obj['dest'];
                        if (obj['reclaim'])
                            formattedObj['reclaim'] = (0, wei_1.wei)(obj['reclaim']);
                        if (obj['rebate'])
                            formattedObj['rebate'] = (0, wei_1.wei)(obj['rebate']);
                        if (obj['srcRoundIdAtPeriodEnd'])
                            formattedObj['srcRoundIdAtPeriodEnd'] = (0, wei_1.wei)(obj['srcRoundIdAtPeriodEnd'], 0);
                        if (obj['destRoundIdAtPeriodEnd'])
                            formattedObj['destRoundIdAtPeriodEnd'] = (0, wei_1.wei)(obj['destRoundIdAtPeriodEnd'], 0);
                        if (obj['exchangeTimestamp'])
                            formattedObj['exchangeTimestamp'] = (0, wei_1.wei)(obj['exchangeTimestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getExchangeEntrySettleds = getExchangeEntrySettleds;
var getExchangeFeeById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('exchangeFee', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['fee'])
                        formattedObj['fee'] = (0, wei_1.wei)(obj['fee']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getExchangeFeeById = getExchangeFeeById;
var getExchangeFees = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('exchangeFees', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['fee'])
                            formattedObj['fee'] = (0, wei_1.wei)(obj['fee']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getExchangeFees = getExchangeFees;
var getExchangePartnerById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('exchangePartner', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['usdVolume'])
                        formattedObj['usdVolume'] = (0, wei_1.wei)(obj['usdVolume']);
                    if (obj['usdFees'])
                        formattedObj['usdFees'] = (0, wei_1.wei)(obj['usdFees']);
                    if (obj['trades'])
                        formattedObj['trades'] = (0, wei_1.wei)(obj['trades'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getExchangePartnerById = getExchangePartnerById;
var getExchangePartners = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('exchangePartners', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['usdVolume'])
                            formattedObj['usdVolume'] = (0, wei_1.wei)(obj['usdVolume']);
                        if (obj['usdFees'])
                            formattedObj['usdFees'] = (0, wei_1.wei)(obj['usdFees']);
                        if (obj['trades'])
                            formattedObj['trades'] = (0, wei_1.wei)(obj['trades'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getExchangePartners = getExchangePartners;
var getExchangeRebateById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('exchangeRebate', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['currencyKey'])
                        formattedObj['currencyKey'] = obj['currencyKey'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['amountInUSD'])
                        formattedObj['amountInUSD'] = (0, wei_1.wei)(obj['amountInUSD']);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['gasPrice'])
                        formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                    if (obj['block'])
                        formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getExchangeRebateById = getExchangeRebateById;
var getExchangeRebates = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('exchangeRebates', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['currencyKey'])
                            formattedObj['currencyKey'] = obj['currencyKey'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['amountInUSD'])
                            formattedObj['amountInUSD'] = (0, wei_1.wei)(obj['amountInUSD']);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['gasPrice'])
                            formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                        if (obj['block'])
                            formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getExchangeRebates = getExchangeRebates;
var getExchangeReclaimById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('exchangeReclaim', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['currencyKey'])
                        formattedObj['currencyKey'] = obj['currencyKey'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['amountInUSD'])
                        formattedObj['amountInUSD'] = (0, wei_1.wei)(obj['amountInUSD']);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['gasPrice'])
                        formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                    if (obj['block'])
                        formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getExchangeReclaimById = getExchangeReclaimById;
var getExchangeReclaims = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('exchangeReclaims', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['currencyKey'])
                            formattedObj['currencyKey'] = obj['currencyKey'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['amountInUSD'])
                            formattedObj['amountInUSD'] = (0, wei_1.wei)(obj['amountInUSD']);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['gasPrice'])
                            formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                        if (obj['block'])
                            formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getExchangeReclaims = getExchangeReclaims;
var getExchangerById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('exchanger', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['period'])
                        formattedObj['period'] = (0, wei_1.wei)(obj['period'], 0);
                    if (obj['bucketMagnitude'])
                        formattedObj['bucketMagnitude'] = (0, wei_1.wei)(obj['bucketMagnitude'], 0);
                    if (obj['synth'])
                        formattedObj['synth'] = obj['synth'];
                    if (obj['firstSeen'])
                        formattedObj['firstSeen'] = (0, wei_1.wei)(obj['firstSeen'], 0);
                    if (obj['lastSeen'])
                        formattedObj['lastSeen'] = (0, wei_1.wei)(obj['lastSeen'], 0);
                    if (obj['trades'])
                        formattedObj['trades'] = (0, wei_1.wei)(obj['trades'], 0);
                    if (obj['exchangeUSDTally'])
                        formattedObj['exchangeUSDTally'] = (0, wei_1.wei)(obj['exchangeUSDTally']);
                    if (obj['totalFeesGeneratedInUSD'])
                        formattedObj['totalFeesGeneratedInUSD'] = (0, wei_1.wei)(obj['totalFeesGeneratedInUSD']);
                    if (obj['balances'])
                        formattedObj['balances'] = obj['balances'];
                    if (obj['exchanges'])
                        formattedObj['exchanges'] = obj['exchanges'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getExchangerById = getExchangerById;
var getExchangers = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('exchangers', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['period'])
                            formattedObj['period'] = (0, wei_1.wei)(obj['period'], 0);
                        if (obj['bucketMagnitude'])
                            formattedObj['bucketMagnitude'] = (0, wei_1.wei)(obj['bucketMagnitude'], 0);
                        if (obj['synth'])
                            formattedObj['synth'] = obj['synth'];
                        if (obj['firstSeen'])
                            formattedObj['firstSeen'] = (0, wei_1.wei)(obj['firstSeen'], 0);
                        if (obj['lastSeen'])
                            formattedObj['lastSeen'] = (0, wei_1.wei)(obj['lastSeen'], 0);
                        if (obj['trades'])
                            formattedObj['trades'] = (0, wei_1.wei)(obj['trades'], 0);
                        if (obj['exchangeUSDTally'])
                            formattedObj['exchangeUSDTally'] = (0, wei_1.wei)(obj['exchangeUSDTally']);
                        if (obj['totalFeesGeneratedInUSD'])
                            formattedObj['totalFeesGeneratedInUSD'] = (0, wei_1.wei)(obj['totalFeesGeneratedInUSD']);
                        if (obj['balances'])
                            formattedObj['balances'] = obj['balances'];
                        if (obj['exchanges'])
                            formattedObj['exchanges'] = obj['exchanges'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getExchangers = getExchangers;
var getFeesClaimedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('feesClaimed', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['value'])
                        formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                    if (obj['rewards'])
                        formattedObj['rewards'] = (0, wei_1.wei)(obj['rewards']);
                    if (obj['block'])
                        formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getFeesClaimedById = getFeesClaimedById;
var getFeesClaimeds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('feesClaimeds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['value'])
                            formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                        if (obj['rewards'])
                            formattedObj['rewards'] = (0, wei_1.wei)(obj['rewards']);
                        if (obj['block'])
                            formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getFeesClaimeds = getFeesClaimeds;
var getFifteenMinuteSNXPriceById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('fifteenMinuteSNXPrice', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['count'])
                        formattedObj['count'] = (0, wei_1.wei)(obj['count'], 0);
                    if (obj['averagePrice'])
                        formattedObj['averagePrice'] = (0, wei_1.wei)(obj['averagePrice']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getFifteenMinuteSNXPriceById = getFifteenMinuteSNXPriceById;
var getFifteenMinuteSNXPrices = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('fifteenMinuteSNXPrices', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['count'])
                            formattedObj['count'] = (0, wei_1.wei)(obj['count'], 0);
                        if (obj['averagePrice'])
                            formattedObj['averagePrice'] = (0, wei_1.wei)(obj['averagePrice']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getFifteenMinuteSNXPrices = getFifteenMinuteSNXPrices;
var getInversePricingInfoById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('inversePricingInfo', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['frozen'])
                        formattedObj['frozen'] = obj['frozen'];
                    if (obj['upperLimit'])
                        formattedObj['upperLimit'] = (0, wei_1.wei)(obj['upperLimit']);
                    if (obj['lowerLimit'])
                        formattedObj['lowerLimit'] = (0, wei_1.wei)(obj['lowerLimit']);
                    if (obj['entryPoint'])
                        formattedObj['entryPoint'] = (0, wei_1.wei)(obj['entryPoint']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getInversePricingInfoById = getInversePricingInfoById;
var getInversePricingInfos = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('inversePricingInfos', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['frozen'])
                            formattedObj['frozen'] = obj['frozen'];
                        if (obj['upperLimit'])
                            formattedObj['upperLimit'] = (0, wei_1.wei)(obj['upperLimit']);
                        if (obj['lowerLimit'])
                            formattedObj['lowerLimit'] = (0, wei_1.wei)(obj['lowerLimit']);
                        if (obj['entryPoint'])
                            formattedObj['entryPoint'] = (0, wei_1.wei)(obj['entryPoint']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getInversePricingInfos = getInversePricingInfos;
var getIssuedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('issued', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['value'])
                        formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                    if (obj['source'])
                        formattedObj['source'] = obj['source'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['gasPrice'])
                        formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                    if (obj['block'])
                        formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getIssuedById = getIssuedById;
var getIssueds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('issueds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['value'])
                            formattedObj['value'] = (0, wei_1.wei)(obj['value']);
                        if (obj['source'])
                            formattedObj['source'] = obj['source'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['gasPrice'])
                            formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                        if (obj['block'])
                            formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getIssueds = getIssueds;
var getIssuerById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('issuer', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getIssuerById = getIssuerById;
var getIssuers = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('issuers', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getIssuers = getIssuers;
var getLatestRateById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('latestRate', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['rate'])
                        formattedObj['rate'] = (0, wei_1.wei)(obj['rate']);
                    if (obj['aggregator'])
                        formattedObj['aggregator'] = obj['aggregator'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getLatestRateById = getLatestRateById;
var getLatestRates = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('latestRates', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['rate'])
                            formattedObj['rate'] = (0, wei_1.wei)(obj['rate']);
                        if (obj['aggregator'])
                            formattedObj['aggregator'] = obj['aggregator'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getLatestRates = getLatestRates;
var getLatestSynthBalanceById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('latestSynthBalance', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['address'])
                        formattedObj['address'] = obj['address'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['synth'])
                        formattedObj['synth'] = obj['synth'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getLatestSynthBalanceById = getLatestSynthBalanceById;
var getLatestSynthBalances = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('latestSynthBalances', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['address'])
                            formattedObj['address'] = obj['address'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['synth'])
                            formattedObj['synth'] = obj['synth'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getLatestSynthBalances = getLatestSynthBalances;
var getLoanById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('loan', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['txHash'])
                        formattedObj['txHash'] = obj['txHash'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['collateralMinted'])
                        formattedObj['collateralMinted'] = obj['collateralMinted'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['isOpen'])
                        formattedObj['isOpen'] = obj['isOpen'];
                    if (obj['createdAt'])
                        formattedObj['createdAt'] = (0, wei_1.wei)(obj['createdAt'], 0);
                    if (obj['closedAt'])
                        formattedObj['closedAt'] = (0, wei_1.wei)(obj['closedAt'], 0);
                    if (obj['hasPartialLiquidations'])
                        formattedObj['hasPartialLiquidations'] = obj['hasPartialLiquidations'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getLoanById = getLoanById;
var getLoans = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('loans', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['txHash'])
                            formattedObj['txHash'] = obj['txHash'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['collateralMinted'])
                            formattedObj['collateralMinted'] = obj['collateralMinted'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['isOpen'])
                            formattedObj['isOpen'] = obj['isOpen'];
                        if (obj['createdAt'])
                            formattedObj['createdAt'] = (0, wei_1.wei)(obj['createdAt'], 0);
                        if (obj['closedAt'])
                            formattedObj['closedAt'] = (0, wei_1.wei)(obj['closedAt'], 0);
                        if (obj['hasPartialLiquidations'])
                            formattedObj['hasPartialLiquidations'] = obj['hasPartialLiquidations'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getLoans = getLoans;
var getLoanLiquidatedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('loanLiquidated', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['loanId'])
                        formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['liquidator'])
                        formattedObj['liquidator'] = obj['liquidator'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getLoanLiquidatedById = getLoanLiquidatedById;
var getLoanLiquidateds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('loanLiquidateds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['loanId'])
                            formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['liquidator'])
                            formattedObj['liquidator'] = obj['liquidator'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getLoanLiquidateds = getLoanLiquidateds;
var getLoanPartiallyLiquidatedById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('loanPartiallyLiquidated', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['loanId'])
                        formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['liquidator'])
                        formattedObj['liquidator'] = obj['liquidator'];
                    if (obj['liquidatedAmount'])
                        formattedObj['liquidatedAmount'] = (0, wei_1.wei)(obj['liquidatedAmount']);
                    if (obj['liquidatedCollateral'])
                        formattedObj['liquidatedCollateral'] = (0, wei_1.wei)(obj['liquidatedCollateral']);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getLoanPartiallyLiquidatedById = getLoanPartiallyLiquidatedById;
var getLoanPartiallyLiquidateds = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('loanPartiallyLiquidateds', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['loanId'])
                            formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['liquidator'])
                            formattedObj['liquidator'] = obj['liquidator'];
                        if (obj['liquidatedAmount'])
                            formattedObj['liquidatedAmount'] = (0, wei_1.wei)(obj['liquidatedAmount']);
                        if (obj['liquidatedCollateral'])
                            formattedObj['liquidatedCollateral'] = (0, wei_1.wei)(obj['liquidatedCollateral']);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getLoanPartiallyLiquidateds = getLoanPartiallyLiquidateds;
var getLoanRepaidById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('loanRepaid', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['repaidAmount'])
                        formattedObj['repaidAmount'] = (0, wei_1.wei)(obj['repaidAmount']);
                    if (obj['newLoanAmount'])
                        formattedObj['newLoanAmount'] = (0, wei_1.wei)(obj['newLoanAmount']);
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['loanId'])
                        formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getLoanRepaidById = getLoanRepaidById;
var getLoanRepaids = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('loanRepaids', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['repaidAmount'])
                            formattedObj['repaidAmount'] = (0, wei_1.wei)(obj['repaidAmount']);
                        if (obj['newLoanAmount'])
                            formattedObj['newLoanAmount'] = (0, wei_1.wei)(obj['newLoanAmount']);
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['loanId'])
                            formattedObj['loanId'] = (0, wei_1.wei)(obj['loanId'], 0);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getLoanRepaids = getLoanRepaids;
var getRateUpdateById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('rateUpdate', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['currencyKey'])
                        formattedObj['currencyKey'] = obj['currencyKey'];
                    if (obj['synth'])
                        formattedObj['synth'] = obj['synth'];
                    if (obj['rate'])
                        formattedObj['rate'] = (0, wei_1.wei)(obj['rate']);
                    if (obj['block'])
                        formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getRateUpdateById = getRateUpdateById;
var getRateUpdates = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('rateUpdates', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['currencyKey'])
                            formattedObj['currencyKey'] = obj['currencyKey'];
                        if (obj['synth'])
                            formattedObj['synth'] = obj['synth'];
                        if (obj['rate'])
                            formattedObj['rate'] = (0, wei_1.wei)(obj['rate']);
                        if (obj['block'])
                            formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getRateUpdates = getRateUpdates;
var getRewardEscrowHolderById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('rewardEscrowHolder', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['balanceOf'])
                        formattedObj['balanceOf'] = (0, wei_1.wei)(obj['balanceOf']);
                    if (obj['vestedBalanceOf'])
                        formattedObj['vestedBalanceOf'] = (0, wei_1.wei)(obj['vestedBalanceOf']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getRewardEscrowHolderById = getRewardEscrowHolderById;
var getRewardEscrowHolders = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('rewardEscrowHolders', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['balanceOf'])
                            formattedObj['balanceOf'] = (0, wei_1.wei)(obj['balanceOf']);
                        if (obj['vestedBalanceOf'])
                            formattedObj['vestedBalanceOf'] = (0, wei_1.wei)(obj['vestedBalanceOf']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getRewardEscrowHolders = getRewardEscrowHolders;
var getSNXHolderById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('sNXHolder', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['block'])
                        formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['balanceOf'])
                        formattedObj['balanceOf'] = (0, wei_1.wei)(obj['balanceOf']);
                    if (obj['collateral'])
                        formattedObj['collateral'] = (0, wei_1.wei)(obj['collateral']);
                    if (obj['transferable'])
                        formattedObj['transferable'] = (0, wei_1.wei)(obj['transferable']);
                    if (obj['initialDebtOwnership'])
                        formattedObj['initialDebtOwnership'] = (0, wei_1.wei)(obj['initialDebtOwnership'], 0);
                    if (obj['debtEntryAtIndex'])
                        formattedObj['debtEntryAtIndex'] = (0, wei_1.wei)(obj['debtEntryAtIndex'], 0);
                    if (obj['claims'])
                        formattedObj['claims'] = (0, wei_1.wei)(obj['claims'], 0);
                    if (obj['mints'])
                        formattedObj['mints'] = (0, wei_1.wei)(obj['mints'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getSNXHolderById = getSNXHolderById;
var getSNXHolders = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('sNXHolders', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['block'])
                            formattedObj['block'] = (0, wei_1.wei)(obj['block'], 0);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['balanceOf'])
                            formattedObj['balanceOf'] = (0, wei_1.wei)(obj['balanceOf']);
                        if (obj['collateral'])
                            formattedObj['collateral'] = (0, wei_1.wei)(obj['collateral']);
                        if (obj['transferable'])
                            formattedObj['transferable'] = (0, wei_1.wei)(obj['transferable']);
                        if (obj['initialDebtOwnership'])
                            formattedObj['initialDebtOwnership'] = (0, wei_1.wei)(obj['initialDebtOwnership'], 0);
                        if (obj['debtEntryAtIndex'])
                            formattedObj['debtEntryAtIndex'] = (0, wei_1.wei)(obj['debtEntryAtIndex'], 0);
                        if (obj['claims'])
                            formattedObj['claims'] = (0, wei_1.wei)(obj['claims'], 0);
                        if (obj['mints'])
                            formattedObj['mints'] = (0, wei_1.wei)(obj['mints'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getSNXHolders = getSNXHolders;
var getShortById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('short', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['contractData'])
                        formattedObj['contractData'] = obj['contractData'];
                    if (obj['txHash'])
                        formattedObj['txHash'] = obj['txHash'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['collateralLocked'])
                        formattedObj['collateralLocked'] = obj['collateralLocked'];
                    if (obj['collateralLockedAmount'])
                        formattedObj['collateralLockedAmount'] = (0, wei_1.wei)(obj['collateralLockedAmount']);
                    if (obj['synthBorrowed'])
                        formattedObj['synthBorrowed'] = obj['synthBorrowed'];
                    if (obj['synthBorrowedAmount'])
                        formattedObj['synthBorrowedAmount'] = (0, wei_1.wei)(obj['synthBorrowedAmount']);
                    if (obj['accruedInterestLastUpdateTimestamp'])
                        formattedObj['accruedInterestLastUpdateTimestamp'] = (0, wei_1.wei)(obj['accruedInterestLastUpdateTimestamp'], 0);
                    if (obj['isOpen'])
                        formattedObj['isOpen'] = obj['isOpen'];
                    if (obj['createdAtBlock'])
                        formattedObj['createdAtBlock'] = (0, wei_1.wei)(obj['createdAtBlock'], 0);
                    if (obj['createdAt'])
                        formattedObj['createdAt'] = (0, wei_1.wei)(obj['createdAt'], 0);
                    if (obj['closedAt'])
                        formattedObj['closedAt'] = (0, wei_1.wei)(obj['closedAt'], 0);
                    if (obj['liquidations'])
                        formattedObj['liquidations'] = obj['liquidations'];
                    if (obj['collateralChanges'])
                        formattedObj['collateralChanges'] = obj['collateralChanges'];
                    if (obj['loanChanges'])
                        formattedObj['loanChanges'] = obj['loanChanges'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getShortById = getShortById;
var getShorts = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('shorts', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['contractData'])
                            formattedObj['contractData'] = obj['contractData'];
                        if (obj['txHash'])
                            formattedObj['txHash'] = obj['txHash'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['collateralLocked'])
                            formattedObj['collateralLocked'] = obj['collateralLocked'];
                        if (obj['collateralLockedAmount'])
                            formattedObj['collateralLockedAmount'] = (0, wei_1.wei)(obj['collateralLockedAmount']);
                        if (obj['synthBorrowed'])
                            formattedObj['synthBorrowed'] = obj['synthBorrowed'];
                        if (obj['synthBorrowedAmount'])
                            formattedObj['synthBorrowedAmount'] = (0, wei_1.wei)(obj['synthBorrowedAmount']);
                        if (obj['accruedInterestLastUpdateTimestamp'])
                            formattedObj['accruedInterestLastUpdateTimestamp'] = (0, wei_1.wei)(obj['accruedInterestLastUpdateTimestamp'], 0);
                        if (obj['isOpen'])
                            formattedObj['isOpen'] = obj['isOpen'];
                        if (obj['createdAtBlock'])
                            formattedObj['createdAtBlock'] = (0, wei_1.wei)(obj['createdAtBlock'], 0);
                        if (obj['createdAt'])
                            formattedObj['createdAt'] = (0, wei_1.wei)(obj['createdAt'], 0);
                        if (obj['closedAt'])
                            formattedObj['closedAt'] = (0, wei_1.wei)(obj['closedAt'], 0);
                        if (obj['liquidations'])
                            formattedObj['liquidations'] = obj['liquidations'];
                        if (obj['collateralChanges'])
                            formattedObj['collateralChanges'] = obj['collateralChanges'];
                        if (obj['loanChanges'])
                            formattedObj['loanChanges'] = obj['loanChanges'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getShorts = getShorts;
var getShortCollateralChangeById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('shortCollateralChange', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['isDeposit'])
                        formattedObj['isDeposit'] = obj['isDeposit'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['collateralAfter'])
                        formattedObj['collateralAfter'] = (0, wei_1.wei)(obj['collateralAfter']);
                    if (obj['short'])
                        formattedObj['short'] = obj['short'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['blockNumber'])
                        formattedObj['blockNumber'] = (0, wei_1.wei)(obj['blockNumber'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getShortCollateralChangeById = getShortCollateralChangeById;
var getShortCollateralChanges = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('shortCollateralChanges', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['isDeposit'])
                            formattedObj['isDeposit'] = obj['isDeposit'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['collateralAfter'])
                            formattedObj['collateralAfter'] = (0, wei_1.wei)(obj['collateralAfter']);
                        if (obj['short'])
                            formattedObj['short'] = obj['short'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['blockNumber'])
                            formattedObj['blockNumber'] = (0, wei_1.wei)(obj['blockNumber'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getShortCollateralChanges = getShortCollateralChanges;
var getShortContractById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('shortContract', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['shorts'])
                        formattedObj['shorts'] = obj['shorts'];
                    if (obj['contractUpdates'])
                        formattedObj['contractUpdates'] = obj['contractUpdates'];
                    if (obj['minCratio'])
                        formattedObj['minCratio'] = (0, wei_1.wei)(obj['minCratio'], 0);
                    if (obj['minCollateral'])
                        formattedObj['minCollateral'] = (0, wei_1.wei)(obj['minCollateral']);
                    if (obj['issueFeeRate'])
                        formattedObj['issueFeeRate'] = (0, wei_1.wei)(obj['issueFeeRate']);
                    if (obj['maxLoansPerAccount'])
                        formattedObj['maxLoansPerAccount'] = (0, wei_1.wei)(obj['maxLoansPerAccount'], 0);
                    if (obj['interactionDelay'])
                        formattedObj['interactionDelay'] = (0, wei_1.wei)(obj['interactionDelay'], 0);
                    if (obj['manager'])
                        formattedObj['manager'] = obj['manager'];
                    if (obj['canOpenLoans'])
                        formattedObj['canOpenLoans'] = obj['canOpenLoans'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getShortContractById = getShortContractById;
var getShortContracts = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('shortContracts', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['shorts'])
                            formattedObj['shorts'] = obj['shorts'];
                        if (obj['contractUpdates'])
                            formattedObj['contractUpdates'] = obj['contractUpdates'];
                        if (obj['minCratio'])
                            formattedObj['minCratio'] = (0, wei_1.wei)(obj['minCratio'], 0);
                        if (obj['minCollateral'])
                            formattedObj['minCollateral'] = (0, wei_1.wei)(obj['minCollateral']);
                        if (obj['issueFeeRate'])
                            formattedObj['issueFeeRate'] = (0, wei_1.wei)(obj['issueFeeRate']);
                        if (obj['maxLoansPerAccount'])
                            formattedObj['maxLoansPerAccount'] = (0, wei_1.wei)(obj['maxLoansPerAccount'], 0);
                        if (obj['interactionDelay'])
                            formattedObj['interactionDelay'] = (0, wei_1.wei)(obj['interactionDelay'], 0);
                        if (obj['manager'])
                            formattedObj['manager'] = obj['manager'];
                        if (obj['canOpenLoans'])
                            formattedObj['canOpenLoans'] = obj['canOpenLoans'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getShortContracts = getShortContracts;
var getShortContractUpdateById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('shortContractUpdate', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['field'])
                        formattedObj['field'] = obj['field'];
                    if (obj['value'])
                        formattedObj['value'] = obj['value'];
                    if (obj['contractData'])
                        formattedObj['contractData'] = obj['contractData'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['blockNumber'])
                        formattedObj['blockNumber'] = (0, wei_1.wei)(obj['blockNumber'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getShortContractUpdateById = getShortContractUpdateById;
var getShortContractUpdates = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('shortContractUpdates', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['field'])
                            formattedObj['field'] = obj['field'];
                        if (obj['value'])
                            formattedObj['value'] = obj['value'];
                        if (obj['contractData'])
                            formattedObj['contractData'] = obj['contractData'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['blockNumber'])
                            formattedObj['blockNumber'] = (0, wei_1.wei)(obj['blockNumber'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getShortContractUpdates = getShortContractUpdates;
var getShortLiquidationById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('shortLiquidation', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['liquidator'])
                        formattedObj['liquidator'] = obj['liquidator'];
                    if (obj['isClosed'])
                        formattedObj['isClosed'] = obj['isClosed'];
                    if (obj['liquidatedAmount'])
                        formattedObj['liquidatedAmount'] = (0, wei_1.wei)(obj['liquidatedAmount']);
                    if (obj['liquidatedCollateral'])
                        formattedObj['liquidatedCollateral'] = (0, wei_1.wei)(obj['liquidatedCollateral']);
                    if (obj['short'])
                        formattedObj['short'] = obj['short'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['blockNumber'])
                        formattedObj['blockNumber'] = (0, wei_1.wei)(obj['blockNumber'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getShortLiquidationById = getShortLiquidationById;
var getShortLiquidations = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('shortLiquidations', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['liquidator'])
                            formattedObj['liquidator'] = obj['liquidator'];
                        if (obj['isClosed'])
                            formattedObj['isClosed'] = obj['isClosed'];
                        if (obj['liquidatedAmount'])
                            formattedObj['liquidatedAmount'] = (0, wei_1.wei)(obj['liquidatedAmount']);
                        if (obj['liquidatedCollateral'])
                            formattedObj['liquidatedCollateral'] = (0, wei_1.wei)(obj['liquidatedCollateral']);
                        if (obj['short'])
                            formattedObj['short'] = obj['short'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['blockNumber'])
                            formattedObj['blockNumber'] = (0, wei_1.wei)(obj['blockNumber'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getShortLiquidations = getShortLiquidations;
var getShortLoanChangeById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('shortLoanChange', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['isRepayment'])
                        formattedObj['isRepayment'] = obj['isRepayment'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['loanAfter'])
                        formattedObj['loanAfter'] = (0, wei_1.wei)(obj['loanAfter']);
                    if (obj['short'])
                        formattedObj['short'] = obj['short'];
                    if (obj['rate'])
                        formattedObj['rate'] = (0, wei_1.wei)(obj['rate']);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['blockNumber'])
                        formattedObj['blockNumber'] = (0, wei_1.wei)(obj['blockNumber'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getShortLoanChangeById = getShortLoanChangeById;
var getShortLoanChanges = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('shortLoanChanges', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['isRepayment'])
                            formattedObj['isRepayment'] = obj['isRepayment'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['loanAfter'])
                            formattedObj['loanAfter'] = (0, wei_1.wei)(obj['loanAfter']);
                        if (obj['short'])
                            formattedObj['short'] = obj['short'];
                        if (obj['rate'])
                            formattedObj['rate'] = (0, wei_1.wei)(obj['rate']);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['blockNumber'])
                            formattedObj['blockNumber'] = (0, wei_1.wei)(obj['blockNumber'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getShortLoanChanges = getShortLoanChanges;
var getSynthById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('synth', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['name'])
                        formattedObj['name'] = obj['name'];
                    if (obj['symbol'])
                        formattedObj['symbol'] = obj['symbol'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getSynthById = getSynthById;
var getSynths = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('synths', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['name'])
                            formattedObj['name'] = obj['name'];
                        if (obj['symbol'])
                            formattedObj['symbol'] = obj['symbol'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getSynths = getSynths;
var getSynthBalanceById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('synthBalance', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['address'])
                        formattedObj['address'] = obj['address'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['synth'])
                        formattedObj['synth'] = obj['synth'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getSynthBalanceById = getSynthBalanceById;
var getSynthBalances = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('synthBalances', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['address'])
                            formattedObj['address'] = obj['address'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['synth'])
                            formattedObj['synth'] = obj['synth'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getSynthBalances = getSynthBalances;
var getSynthByCurrencyKeyById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('synthByCurrencyKey', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['proxyAddress'])
                        formattedObj['proxyAddress'] = obj['proxyAddress'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getSynthByCurrencyKeyById = getSynthByCurrencyKeyById;
var getSynthByCurrencyKeys = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('synthByCurrencyKeys', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['proxyAddress'])
                            formattedObj['proxyAddress'] = obj['proxyAddress'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getSynthByCurrencyKeys = getSynthByCurrencyKeys;
var getSynthExchangeById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('synthExchange', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['fromSynth'])
                        formattedObj['fromSynth'] = obj['fromSynth'];
                    if (obj['toSynth'])
                        formattedObj['toSynth'] = obj['toSynth'];
                    if (obj['fromAmount'])
                        formattedObj['fromAmount'] = (0, wei_1.wei)(obj['fromAmount']);
                    if (obj['fromAmountInUSD'])
                        formattedObj['fromAmountInUSD'] = (0, wei_1.wei)(obj['fromAmountInUSD']);
                    if (obj['toAmount'])
                        formattedObj['toAmount'] = (0, wei_1.wei)(obj['toAmount']);
                    if (obj['toAmountInUSD'])
                        formattedObj['toAmountInUSD'] = (0, wei_1.wei)(obj['toAmountInUSD']);
                    if (obj['feesInUSD'])
                        formattedObj['feesInUSD'] = (0, wei_1.wei)(obj['feesInUSD']);
                    if (obj['toAddress'])
                        formattedObj['toAddress'] = obj['toAddress'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['gasPrice'])
                        formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getSynthExchangeById = getSynthExchangeById;
var getSynthExchanges = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('synthExchanges', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['fromSynth'])
                            formattedObj['fromSynth'] = obj['fromSynth'];
                        if (obj['toSynth'])
                            formattedObj['toSynth'] = obj['toSynth'];
                        if (obj['fromAmount'])
                            formattedObj['fromAmount'] = (0, wei_1.wei)(obj['fromAmount']);
                        if (obj['fromAmountInUSD'])
                            formattedObj['fromAmountInUSD'] = (0, wei_1.wei)(obj['fromAmountInUSD']);
                        if (obj['toAmount'])
                            formattedObj['toAmount'] = (0, wei_1.wei)(obj['toAmount']);
                        if (obj['toAmountInUSD'])
                            formattedObj['toAmountInUSD'] = (0, wei_1.wei)(obj['toAmountInUSD']);
                        if (obj['feesInUSD'])
                            formattedObj['feesInUSD'] = (0, wei_1.wei)(obj['feesInUSD']);
                        if (obj['toAddress'])
                            formattedObj['toAddress'] = obj['toAddress'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['gasPrice'])
                            formattedObj['gasPrice'] = (0, wei_1.wei)(obj['gasPrice'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getSynthExchanges = getSynthExchanges;
var getSynthetixById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('synthetix', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['issuers'])
                        formattedObj['issuers'] = (0, wei_1.wei)(obj['issuers'], 0);
                    if (obj['snxHolders'])
                        formattedObj['snxHolders'] = (0, wei_1.wei)(obj['snxHolders'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getSynthetixById = getSynthetixById;
var getSynthetixs = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('synthetixs', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['issuers'])
                            formattedObj['issuers'] = (0, wei_1.wei)(obj['issuers'], 0);
                        if (obj['snxHolders'])
                            formattedObj['snxHolders'] = (0, wei_1.wei)(obj['snxHolders'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getSynthetixs = getSynthetixs;
var getTemporaryExchangePartnerTrackerById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('temporaryExchangePartnerTracker', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['usdVolume'])
                        formattedObj['usdVolume'] = (0, wei_1.wei)(obj['usdVolume']);
                    if (obj['usdFees'])
                        formattedObj['usdFees'] = (0, wei_1.wei)(obj['usdFees']);
                    if (obj['partner'])
                        formattedObj['partner'] = obj['partner'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getTemporaryExchangePartnerTrackerById = getTemporaryExchangePartnerTrackerById;
var getTemporaryExchangePartnerTrackers = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('temporaryExchangePartnerTrackers', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['usdVolume'])
                            formattedObj['usdVolume'] = (0, wei_1.wei)(obj['usdVolume']);
                        if (obj['usdFees'])
                            formattedObj['usdFees'] = (0, wei_1.wei)(obj['usdFees']);
                        if (obj['partner'])
                            formattedObj['partner'] = obj['partner'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getTemporaryExchangePartnerTrackers = getTemporaryExchangePartnerTrackers;
var getTotalById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('total', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['period'])
                        formattedObj['period'] = (0, wei_1.wei)(obj['period'], 0);
                    if (obj['bucketMagnitude'])
                        formattedObj['bucketMagnitude'] = (0, wei_1.wei)(obj['bucketMagnitude'], 0);
                    if (obj['synth'])
                        formattedObj['synth'] = obj['synth'];
                    if (obj['trades'])
                        formattedObj['trades'] = (0, wei_1.wei)(obj['trades'], 0);
                    if (obj['newExchangers'])
                        formattedObj['newExchangers'] = (0, wei_1.wei)(obj['newExchangers'], 0);
                    if (obj['exchangers'])
                        formattedObj['exchangers'] = (0, wei_1.wei)(obj['exchangers'], 0);
                    if (obj['exchangeUSDTally'])
                        formattedObj['exchangeUSDTally'] = (0, wei_1.wei)(obj['exchangeUSDTally']);
                    if (obj['totalFeesGeneratedInUSD'])
                        formattedObj['totalFeesGeneratedInUSD'] = (0, wei_1.wei)(obj['totalFeesGeneratedInUSD']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getTotalById = getTotalById;
var getTotals = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('totals', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['period'])
                            formattedObj['period'] = (0, wei_1.wei)(obj['period'], 0);
                        if (obj['bucketMagnitude'])
                            formattedObj['bucketMagnitude'] = (0, wei_1.wei)(obj['bucketMagnitude'], 0);
                        if (obj['synth'])
                            formattedObj['synth'] = obj['synth'];
                        if (obj['trades'])
                            formattedObj['trades'] = (0, wei_1.wei)(obj['trades'], 0);
                        if (obj['newExchangers'])
                            formattedObj['newExchangers'] = (0, wei_1.wei)(obj['newExchangers'], 0);
                        if (obj['exchangers'])
                            formattedObj['exchangers'] = (0, wei_1.wei)(obj['exchangers'], 0);
                        if (obj['exchangeUSDTally'])
                            formattedObj['exchangeUSDTally'] = (0, wei_1.wei)(obj['exchangeUSDTally']);
                        if (obj['totalFeesGeneratedInUSD'])
                            formattedObj['totalFeesGeneratedInUSD'] = (0, wei_1.wei)(obj['totalFeesGeneratedInUSD']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getTotals = getTotals;
var getTotalActiveStakerById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('totalActiveStaker', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['count'])
                        formattedObj['count'] = (0, wei_1.wei)(obj['count'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getTotalActiveStakerById = getTotalActiveStakerById;
var getTotalActiveStakers = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('totalActiveStakers', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['count'])
                            formattedObj['count'] = (0, wei_1.wei)(obj['count'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getTotalActiveStakers = getTotalActiveStakers;
var getTotalDailyActiveStakerById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('totalDailyActiveStaker', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['count'])
                        formattedObj['count'] = (0, wei_1.wei)(obj['count'], 0);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getTotalDailyActiveStakerById = getTotalDailyActiveStakerById;
var getTotalDailyActiveStakers = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('totalDailyActiveStakers', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['count'])
                            formattedObj['count'] = (0, wei_1.wei)(obj['count'], 0);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getTotalDailyActiveStakers = getTotalDailyActiveStakers;
var getWrapperById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('wrapper', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['tokenAddress'])
                        formattedObj['tokenAddress'] = obj['tokenAddress'];
                    if (obj['amount'])
                        formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                    if (obj['amountInUSD'])
                        formattedObj['amountInUSD'] = (0, wei_1.wei)(obj['amountInUSD']);
                    if (obj['maxAmount'])
                        formattedObj['maxAmount'] = (0, wei_1.wei)(obj['maxAmount']);
                    if (obj['currencyKey'])
                        formattedObj['currencyKey'] = obj['currencyKey'];
                    if (obj['totalFees'])
                        formattedObj['totalFees'] = (0, wei_1.wei)(obj['totalFees']);
                    if (obj['totalFeesInUSD'])
                        formattedObj['totalFeesInUSD'] = (0, wei_1.wei)(obj['totalFeesInUSD']);
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getWrapperById = getWrapperById;
var getWrappers = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('wrappers', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['tokenAddress'])
                            formattedObj['tokenAddress'] = obj['tokenAddress'];
                        if (obj['amount'])
                            formattedObj['amount'] = (0, wei_1.wei)(obj['amount']);
                        if (obj['amountInUSD'])
                            formattedObj['amountInUSD'] = (0, wei_1.wei)(obj['amountInUSD']);
                        if (obj['maxAmount'])
                            formattedObj['maxAmount'] = (0, wei_1.wei)(obj['maxAmount']);
                        if (obj['currencyKey'])
                            formattedObj['currencyKey'] = obj['currencyKey'];
                        if (obj['totalFees'])
                            formattedObj['totalFees'] = (0, wei_1.wei)(obj['totalFees']);
                        if (obj['totalFeesInUSD'])
                            formattedObj['totalFeesInUSD'] = (0, wei_1.wei)(obj['totalFeesInUSD']);
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getWrappers = getWrappers;
var getWrapperBurnById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('wrapperBurn', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['principal'])
                        formattedObj['principal'] = (0, wei_1.wei)(obj['principal']);
                    if (obj['fee'])
                        formattedObj['fee'] = (0, wei_1.wei)(obj['fee']);
                    if (obj['amountOut'])
                        formattedObj['amountOut'] = (0, wei_1.wei)(obj['amountOut']);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['wrapperAddress'])
                        formattedObj['wrapperAddress'] = obj['wrapperAddress'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getWrapperBurnById = getWrapperBurnById;
var getWrapperBurns = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('wrapperBurns', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['principal'])
                            formattedObj['principal'] = (0, wei_1.wei)(obj['principal']);
                        if (obj['fee'])
                            formattedObj['fee'] = (0, wei_1.wei)(obj['fee']);
                        if (obj['amountOut'])
                            formattedObj['amountOut'] = (0, wei_1.wei)(obj['amountOut']);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['wrapperAddress'])
                            formattedObj['wrapperAddress'] = obj['wrapperAddress'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getWrapperBurns = getWrapperBurns;
var getWrapperMintById = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var res, r, obj, formattedObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post(url, {
                        query: (0, gql_1.default)('wrapperMint', options, args)
                    })];
                case 1:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    obj = r.data[Object.keys(r.data)[0]];
                    formattedObj = {};
                    if (obj['id'])
                        formattedObj['id'] = obj['id'];
                    if (obj['account'])
                        formattedObj['account'] = obj['account'];
                    if (obj['principal'])
                        formattedObj['principal'] = (0, wei_1.wei)(obj['principal']);
                    if (obj['fee'])
                        formattedObj['fee'] = (0, wei_1.wei)(obj['fee']);
                    if (obj['amountIn'])
                        formattedObj['amountIn'] = (0, wei_1.wei)(obj['amountIn']);
                    if (obj['timestamp'])
                        formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                    if (obj['wrapperAddress'])
                        formattedObj['wrapperAddress'] = obj['wrapperAddress'];
                    return [2 /*return*/, formattedObj];
            }
        });
    });
};
exports.getWrapperMintById = getWrapperMintById;
var getWrapperMints = function (url, options, args) {
    return __awaiter(this, void 0, Promise, function () {
        var paginatedOptions, paginationKey, paginationValue, results, res, r, rawResults, newResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginatedOptions = __assign({}, options);
                    paginationKey = null;
                    paginationValue = '';
                    if (options.first && options.first > MAX_PAGE) {
                        paginatedOptions.first = MAX_PAGE;
                        paginatedOptions.orderBy = options.orderBy || 'id';
                        paginatedOptions.orderDirection = options.orderDirection || 'asc';
                        paginationKey = paginatedOptions.orderBy + (paginatedOptions.orderDirection === 'asc' ? '_gt' : '_lt');
                        paginatedOptions.where = __assign({}, options.where);
                    }
                    results = [];
                    _a.label = 1;
                case 1:
                    if (paginationKey && paginationValue)
                        paginatedOptions.where[paginationKey] = paginationValue;
                    return [4 /*yield*/, axios_1.default.post(url, {
                            query: (0, gql_1.default)('wrapperMints', paginatedOptions, args)
                        })];
                case 2:
                    res = _a.sent();
                    r = res.data;
                    if (r.errors && r.errors.length) {
                        throw new Error(r.errors[0].message);
                    }
                    rawResults = r.data[Object.keys(r.data)[0]];
                    newResults = rawResults.map(function (obj) {
                        var formattedObj = {};
                        if (obj['id'])
                            formattedObj['id'] = obj['id'];
                        if (obj['account'])
                            formattedObj['account'] = obj['account'];
                        if (obj['principal'])
                            formattedObj['principal'] = (0, wei_1.wei)(obj['principal']);
                        if (obj['fee'])
                            formattedObj['fee'] = (0, wei_1.wei)(obj['fee']);
                        if (obj['amountIn'])
                            formattedObj['amountIn'] = (0, wei_1.wei)(obj['amountIn']);
                        if (obj['timestamp'])
                            formattedObj['timestamp'] = (0, wei_1.wei)(obj['timestamp'], 0);
                        if (obj['wrapperAddress'])
                            formattedObj['wrapperAddress'] = obj['wrapperAddress'];
                        return formattedObj;
                    });
                    results = results.concat(newResults);
                    if (newResults.length < 1000) {
                        return [3 /*break*/, 4];
                    }
                    if (paginationKey) {
                        paginationValue = rawResults[rawResults.length - 1][paginatedOptions.orderBy];
                    }
                    _a.label = 3;
                case 3:
                    if (paginationKey && (options.first && results.length < options.first)) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, options.first ? results.slice(0, options.first) : results];
            }
        });
    });
};
exports.getWrapperMints = getWrapperMints;
