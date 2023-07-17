"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseSystemApi = exports.PromiseProcessApi = exports.PromiseInputOutputApi = exports.PromiseInfoApi = exports.PromiseCryptographyApi = exports.PromiseConfigApi = exports.PromiseBlockchainApi = exports.PromiseAuthApi = exports.PromiseAppsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAppsApi = (function () {
    function PromiseAppsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAppsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAppsApi.prototype.getMarketPlaceApps = function (_options) {
        var result = this.api.getMarketPlaceApps(_options);
        return result.toPromise();
    };
    PromiseAppsApi.prototype.installApp = function (_options) {
        var result = this.api.installApp(_options);
        return result.toPromise();
    };
    PromiseAppsApi.prototype.listApps = function (_options) {
        var result = this.api.listApps(_options);
        return result.toPromise();
    };
    PromiseAppsApi.prototype.removeApp = function (_options) {
        var result = this.api.removeApp(_options);
        return result.toPromise();
    };
    return PromiseAppsApi;
}());
exports.PromiseAppsApi = PromiseAppsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseAuthApi = (function () {
    function PromiseAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAuthApi.prototype._delete = function (deleteAccountDTO, _options) {
        var result = this.api._delete(deleteAccountDTO, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.create = function (createAccountDTO, _options) {
        var result = this.api.create(createAccountDTO, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.login = function (encryptedRequestDTO, _options) {
        var result = this.api.login(encryptedRequestDTO, _options);
        return result.toPromise();
    };
    return PromiseAuthApi;
}());
exports.PromiseAuthApi = PromiseAuthApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseBlockchainApi = (function () {
    function PromiseBlockchainApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBlockchainApi(configuration, requestFactory, responseProcessor);
    }
    PromiseBlockchainApi.prototype.downloadDaemon = function (body, _options) {
        var result = this.api.downloadDaemon(body, _options);
        return result.toPromise();
    };
    PromiseBlockchainApi.prototype.exportBlockchain = function (body, _options) {
        var result = this.api.exportBlockchain(body, _options);
        return result.toPromise();
    };
    PromiseBlockchainApi.prototype.importBlockchain = function (body, _options) {
        var result = this.api.importBlockchain(body, _options);
        return result.toPromise();
    };
    PromiseBlockchainApi.prototype.jsonRpc = function (blockchainLetheanRPCDTO, _options) {
        var result = this.api.jsonRpc(blockchainLetheanRPCDTO, _options);
        return result.toPromise();
    };
    PromiseBlockchainApi.prototype.startDaemon = function (blockchainLetheanDaemonStartDTO, _options) {
        var result = this.api.startDaemon(blockchainLetheanDaemonStartDTO, _options);
        return result.toPromise();
    };
    PromiseBlockchainApi.prototype.startWallet = function (blockchainLetheanWalletStartDTO, _options) {
        var result = this.api.startWallet(blockchainLetheanWalletStartDTO, _options);
        return result.toPromise();
    };
    PromiseBlockchainApi.prototype.walletJsonRpc = function (body, _options) {
        var result = this.api.walletJsonRpc(body, _options);
        return result.toPromise();
    };
    return PromiseBlockchainApi;
}());
exports.PromiseBlockchainApi = PromiseBlockchainApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseConfigApi = (function () {
    function PromiseConfigApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }
    PromiseConfigApi.prototype.clearConfig = function (configObjectClearDTO, _options) {
        var result = this.api.clearConfig(configObjectClearDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.countConfig = function (configObjectCountDTO, _options) {
        var result = this.api.countConfig(configObjectCountDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.getConfig = function (configObjectGetDTO, _options) {
        var result = this.api.getConfig(configObjectGetDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.load = function (configFileLoadDTO, _options) {
        var result = this.api.load(configFileLoadDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.parse = function (iNIObjectParseJSONDTO, _options) {
        var result = this.api.parse(iNIObjectParseJSONDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.removeConfig = function (configObjectRemoveDTO, _options) {
        var result = this.api.removeConfig(configObjectRemoveDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.render = function (configFileRenderDTO, _options) {
        var result = this.api.render(configFileRenderDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.renderAndLoad = function (configFileRenderAndLoadDTO, _options) {
        var result = this.api.renderAndLoad(configFileRenderAndLoadDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.renderString = function (configFileRenderStringDTO, _options) {
        var result = this.api.renderString(configFileRenderStringDTO, _options);
        return result.toPromise();
    };
    PromiseConfigApi.prototype.setConfig = function (configObjectSetDTO, _options) {
        var result = this.api.setConfig(configObjectSetDTO, _options);
        return result.toPromise();
    };
    return PromiseConfigApi;
}());
exports.PromiseConfigApi = PromiseConfigApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseCryptographyApi = (function () {
    function PromiseCryptographyApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCryptographyApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCryptographyApi.prototype.createQuasiSalt = function (quasiSaltHashDTO, _options) {
        var result = this.api.createQuasiSalt(quasiSaltHashDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.decrypt = function (openPGPDecryptBYIDDTO, _options) {
        var result = this.api.decrypt(openPGPDecryptBYIDDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.encrypt = function (openPGPEncryptBYIDDTO, _options) {
        var result = this.api.encrypt(openPGPEncryptBYIDDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.generateKeyPair = function (openPGPCreateKeyPairDTO, _options) {
        var result = this.api.generateKeyPair(openPGPCreateKeyPairDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.getPublicKey = function (openPGPGetPublicKeyDTO, _options) {
        var result = this.api.getPublicKey(openPGPGetPublicKeyDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.sha256 = function (hashDTO, _options) {
        var result = this.api.sha256(hashDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.sha384 = function (hashDTO, _options) {
        var result = this.api.sha384(hashDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.sha512 = function (hashDTO, _options) {
        var result = this.api.sha512(hashDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.sign = function (openPGPSignBYIDDTO, _options) {
        var result = this.api.sign(openPGPSignBYIDDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.verify = function (openPGPVerifyBYIDDTO, _options) {
        var result = this.api.verify(openPGPVerifyBYIDDTO, _options);
        return result.toPromise();
    };
    PromiseCryptographyApi.prototype.verifyQuasiSalt = function (quasiSaltHashVerifyDTO, _options) {
        var result = this.api.verifyQuasiSalt(quasiSaltHashVerifyDTO, _options);
        return result.toPromise();
    };
    return PromiseCryptographyApi;
}());
exports.PromiseCryptographyApi = PromiseCryptographyApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseInfoApi = (function () {
    function PromiseInfoApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableInfoApi(configuration, requestFactory, responseProcessor);
    }
    PromiseInfoApi.prototype.welcomePage = function (_options) {
        var result = this.api.welcomePage(_options);
        return result.toPromise();
    };
    return PromiseInfoApi;
}());
exports.PromiseInfoApi = PromiseInfoApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseInputOutputApi = (function () {
    function PromiseInputOutputApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableInputOutputApi(configuration, requestFactory, responseProcessor);
    }
    PromiseInputOutputApi.prototype.fetchFile = function (fileDownloadRequest, _options) {
        var result = this.api.fetchFile(fileDownloadRequest, _options);
        return result.toPromise();
    };
    PromiseInputOutputApi.prototype.getDetailedDirectoryList = function (filePathDTO, _options) {
        var result = this.api.getDetailedDirectoryList(filePathDTO, _options);
        return result.toPromise();
    };
    PromiseInputOutputApi.prototype.getDirectoryList = function (filePathDTO, _options) {
        var result = this.api.getDirectoryList(filePathDTO, _options);
        return result.toPromise();
    };
    PromiseInputOutputApi.prototype.isDir = function (filePathDTO, _options) {
        var result = this.api.isDir(filePathDTO, _options);
        return result.toPromise();
    };
    PromiseInputOutputApi.prototype.isFile = function (filePathDTO, _options) {
        var result = this.api.isFile(filePathDTO, _options);
        return result.toPromise();
    };
    PromiseInputOutputApi.prototype.readFile = function (filePathDTO, _options) {
        var result = this.api.readFile(filePathDTO, _options);
        return result.toPromise();
    };
    PromiseInputOutputApi.prototype.writeFile = function (createFileDTO, _options) {
        var result = this.api.writeFile(createFileDTO, _options);
        return result.toPromise();
    };
    return PromiseInputOutputApi;
}());
exports.PromiseInputOutputApi = PromiseInputOutputApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseProcessApi = (function () {
    function PromiseProcessApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableProcessApi(configuration, requestFactory, responseProcessor);
    }
    PromiseProcessApi.prototype.addProcess = function (processAddDTO, _options) {
        var result = this.api.addProcess(processAddDTO, _options);
        return result.toPromise();
    };
    PromiseProcessApi.prototype.killProcess = function (processKillDTO, _options) {
        var result = this.api.killProcess(processKillDTO, _options);
        return result.toPromise();
    };
    PromiseProcessApi.prototype.runProcess = function (processRunDTO, _options) {
        var result = this.api.runProcess(processRunDTO, _options);
        return result.toPromise();
    };
    PromiseProcessApi.prototype.startProcess = function (processStartDTO, _options) {
        var result = this.api.startProcess(processStartDTO, _options);
        return result.toPromise();
    };
    PromiseProcessApi.prototype.stopProcess = function (processStopDTO, _options) {
        var result = this.api.stopProcess(processStopDTO, _options);
        return result.toPromise();
    };
    return PromiseProcessApi;
}());
exports.PromiseProcessApi = PromiseProcessApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromiseSystemApi = (function () {
    function PromiseSystemApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }
    PromiseSystemApi.prototype.checkServer = function (_options) {
        var result = this.api.checkServer(_options);
        return result.toPromise();
    };
    PromiseSystemApi.prototype.getServerCertificate = function (_options) {
        var result = this.api.getServerCertificate(_options);
        return result.toPromise();
    };
    return PromiseSystemApi;
}());
exports.PromiseSystemApi = PromiseSystemApi;
//# sourceMappingURL=PromiseAPI.js.map