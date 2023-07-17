"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSystemApi = exports.ObjectProcessApi = exports.ObjectInputOutputApi = exports.ObjectInfoApi = exports.ObjectCryptographyApi = exports.ObjectConfigApi = exports.ObjectBlockchainApi = exports.ObjectAuthApi = exports.ObjectAppsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAppsApi = (function () {
    function ObjectAppsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAppsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAppsApi.prototype.getMarketPlaceApps = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getMarketPlaceApps(options).toPromise();
    };
    ObjectAppsApi.prototype.installApp = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.installApp(options).toPromise();
    };
    ObjectAppsApi.prototype.listApps = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listApps(options).toPromise();
    };
    ObjectAppsApi.prototype.removeApp = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.removeApp(options).toPromise();
    };
    return ObjectAppsApi;
}());
exports.ObjectAppsApi = ObjectAppsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectAuthApi = (function () {
    function ObjectAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAuthApi.prototype._delete = function (param, options) {
        return this.api._delete(param.deleteAccountDTO, options).toPromise();
    };
    ObjectAuthApi.prototype.create = function (param, options) {
        return this.api.create(param.createAccountDTO, options).toPromise();
    };
    ObjectAuthApi.prototype.login = function (param, options) {
        return this.api.login(param.encryptedRequestDTO, options).toPromise();
    };
    return ObjectAuthApi;
}());
exports.ObjectAuthApi = ObjectAuthApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectBlockchainApi = (function () {
    function ObjectBlockchainApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBlockchainApi(configuration, requestFactory, responseProcessor);
    }
    ObjectBlockchainApi.prototype.downloadDaemon = function (param, options) {
        return this.api.downloadDaemon(param.body, options).toPromise();
    };
    ObjectBlockchainApi.prototype.exportBlockchain = function (param, options) {
        return this.api.exportBlockchain(param.body, options).toPromise();
    };
    ObjectBlockchainApi.prototype.importBlockchain = function (param, options) {
        return this.api.importBlockchain(param.body, options).toPromise();
    };
    ObjectBlockchainApi.prototype.jsonRpc = function (param, options) {
        return this.api.jsonRpc(param.blockchainLetheanRPCDTO, options).toPromise();
    };
    ObjectBlockchainApi.prototype.startDaemon = function (param, options) {
        return this.api.startDaemon(param.blockchainLetheanDaemonStartDTO, options).toPromise();
    };
    ObjectBlockchainApi.prototype.startWallet = function (param, options) {
        return this.api.startWallet(param.blockchainLetheanWalletStartDTO, options).toPromise();
    };
    ObjectBlockchainApi.prototype.walletJsonRpc = function (param, options) {
        return this.api.walletJsonRpc(param.body, options).toPromise();
    };
    return ObjectBlockchainApi;
}());
exports.ObjectBlockchainApi = ObjectBlockchainApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectConfigApi = (function () {
    function ObjectConfigApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }
    ObjectConfigApi.prototype.clearConfig = function (param, options) {
        return this.api.clearConfig(param.configObjectClearDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.countConfig = function (param, options) {
        return this.api.countConfig(param.configObjectCountDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.getConfig = function (param, options) {
        return this.api.getConfig(param.configObjectGetDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.load = function (param, options) {
        return this.api.load(param.configFileLoadDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.parse = function (param, options) {
        return this.api.parse(param.iNIObjectParseJSONDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.removeConfig = function (param, options) {
        return this.api.removeConfig(param.configObjectRemoveDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.render = function (param, options) {
        return this.api.render(param.configFileRenderDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.renderAndLoad = function (param, options) {
        return this.api.renderAndLoad(param.configFileRenderAndLoadDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.renderString = function (param, options) {
        return this.api.renderString(param.configFileRenderStringDTO, options).toPromise();
    };
    ObjectConfigApi.prototype.setConfig = function (param, options) {
        return this.api.setConfig(param.configObjectSetDTO, options).toPromise();
    };
    return ObjectConfigApi;
}());
exports.ObjectConfigApi = ObjectConfigApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectCryptographyApi = (function () {
    function ObjectCryptographyApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCryptographyApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCryptographyApi.prototype.createQuasiSalt = function (param, options) {
        return this.api.createQuasiSalt(param.quasiSaltHashDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.decrypt = function (param, options) {
        return this.api.decrypt(param.openPGPDecryptBYIDDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.encrypt = function (param, options) {
        return this.api.encrypt(param.openPGPEncryptBYIDDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.generateKeyPair = function (param, options) {
        return this.api.generateKeyPair(param.openPGPCreateKeyPairDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.getPublicKey = function (param, options) {
        return this.api.getPublicKey(param.openPGPGetPublicKeyDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.sha256 = function (param, options) {
        return this.api.sha256(param.hashDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.sha384 = function (param, options) {
        return this.api.sha384(param.hashDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.sha512 = function (param, options) {
        return this.api.sha512(param.hashDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.sign = function (param, options) {
        return this.api.sign(param.openPGPSignBYIDDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.verify = function (param, options) {
        return this.api.verify(param.openPGPVerifyBYIDDTO, options).toPromise();
    };
    ObjectCryptographyApi.prototype.verifyQuasiSalt = function (param, options) {
        return this.api.verifyQuasiSalt(param.quasiSaltHashVerifyDTO, options).toPromise();
    };
    return ObjectCryptographyApi;
}());
exports.ObjectCryptographyApi = ObjectCryptographyApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectInfoApi = (function () {
    function ObjectInfoApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableInfoApi(configuration, requestFactory, responseProcessor);
    }
    ObjectInfoApi.prototype.welcomePage = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.welcomePage(options).toPromise();
    };
    return ObjectInfoApi;
}());
exports.ObjectInfoApi = ObjectInfoApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectInputOutputApi = (function () {
    function ObjectInputOutputApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableInputOutputApi(configuration, requestFactory, responseProcessor);
    }
    ObjectInputOutputApi.prototype.fetchFile = function (param, options) {
        return this.api.fetchFile(param.fileDownloadRequest, options).toPromise();
    };
    ObjectInputOutputApi.prototype.getDetailedDirectoryList = function (param, options) {
        return this.api.getDetailedDirectoryList(param.filePathDTO, options).toPromise();
    };
    ObjectInputOutputApi.prototype.getDirectoryList = function (param, options) {
        return this.api.getDirectoryList(param.filePathDTO, options).toPromise();
    };
    ObjectInputOutputApi.prototype.isDir = function (param, options) {
        return this.api.isDir(param.filePathDTO, options).toPromise();
    };
    ObjectInputOutputApi.prototype.isFile = function (param, options) {
        return this.api.isFile(param.filePathDTO, options).toPromise();
    };
    ObjectInputOutputApi.prototype.readFile = function (param, options) {
        return this.api.readFile(param.filePathDTO, options).toPromise();
    };
    ObjectInputOutputApi.prototype.writeFile = function (param, options) {
        return this.api.writeFile(param.createFileDTO, options).toPromise();
    };
    return ObjectInputOutputApi;
}());
exports.ObjectInputOutputApi = ObjectInputOutputApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectProcessApi = (function () {
    function ObjectProcessApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableProcessApi(configuration, requestFactory, responseProcessor);
    }
    ObjectProcessApi.prototype.addProcess = function (param, options) {
        return this.api.addProcess(param.processAddDTO, options).toPromise();
    };
    ObjectProcessApi.prototype.killProcess = function (param, options) {
        return this.api.killProcess(param.processKillDTO, options).toPromise();
    };
    ObjectProcessApi.prototype.runProcess = function (param, options) {
        return this.api.runProcess(param.processRunDTO, options).toPromise();
    };
    ObjectProcessApi.prototype.startProcess = function (param, options) {
        return this.api.startProcess(param.processStartDTO, options).toPromise();
    };
    ObjectProcessApi.prototype.stopProcess = function (param, options) {
        return this.api.stopProcess(param.processStopDTO, options).toPromise();
    };
    return ObjectProcessApi;
}());
exports.ObjectProcessApi = ObjectProcessApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectSystemApi = (function () {
    function ObjectSystemApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }
    ObjectSystemApi.prototype.checkServer = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.checkServer(options).toPromise();
    };
    ObjectSystemApi.prototype.getServerCertificate = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getServerCertificate(options).toPromise();
    };
    return ObjectSystemApi;
}());
exports.ObjectSystemApi = ObjectSystemApi;
//# sourceMappingURL=ObjectParamAPI.js.map