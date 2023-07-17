"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/BlockchainLetheanDaemonStartDTO"), exports);
__exportStar(require("../models/BlockchainLetheanRPCDTO"), exports);
__exportStar(require("../models/BlockchainLetheanWalletStartDTO"), exports);
__exportStar(require("../models/ConfigFileLoadDTO"), exports);
__exportStar(require("../models/ConfigFileRenderAndLoadDTO"), exports);
__exportStar(require("../models/ConfigFileRenderDTO"), exports);
__exportStar(require("../models/ConfigFileRenderStringDTO"), exports);
__exportStar(require("../models/ConfigObjectClearDTO"), exports);
__exportStar(require("../models/ConfigObjectCountDTO"), exports);
__exportStar(require("../models/ConfigObjectGetDTO"), exports);
__exportStar(require("../models/ConfigObjectRemoveDTO"), exports);
__exportStar(require("../models/ConfigObjectSetDTO"), exports);
__exportStar(require("../models/CreateAccountDTO"), exports);
__exportStar(require("../models/CreateAccountResponseDTO"), exports);
__exportStar(require("../models/CreateFileDTO"), exports);
__exportStar(require("../models/DeleteAccountDTO"), exports);
__exportStar(require("../models/EncryptedRequestDTO"), exports);
__exportStar(require("../models/EncryptedResponseDTO"), exports);
__exportStar(require("../models/FileDownloadRequest"), exports);
__exportStar(require("../models/FilePathCheckDTO"), exports);
__exportStar(require("../models/FilePathDTO"), exports);
__exportStar(require("../models/HashDTO"), exports);
__exportStar(require("../models/INIObjectParseJSONDTO"), exports);
__exportStar(require("../models/OpenPGPCreateKeyPairDTO"), exports);
__exportStar(require("../models/OpenPGPDecryptBYIDDTO"), exports);
__exportStar(require("../models/OpenPGPEncryptBYIDDTO"), exports);
__exportStar(require("../models/OpenPGPGetPublicKeyDTO"), exports);
__exportStar(require("../models/OpenPGPSignBYIDDTO"), exports);
__exportStar(require("../models/OpenPGPVerifyBYIDDTO"), exports);
__exportStar(require("../models/ProcessAddDTO"), exports);
__exportStar(require("../models/ProcessKillDTO"), exports);
__exportStar(require("../models/ProcessRunDTO"), exports);
__exportStar(require("../models/ProcessStartDTO"), exports);
__exportStar(require("../models/ProcessStopDTO"), exports);
__exportStar(require("../models/QuasiSaltHashDTO"), exports);
__exportStar(require("../models/QuasiSaltHashVerifyDTO"), exports);
var BlockchainLetheanDaemonStartDTO_1 = require("../models/BlockchainLetheanDaemonStartDTO");
var BlockchainLetheanRPCDTO_1 = require("../models/BlockchainLetheanRPCDTO");
var BlockchainLetheanWalletStartDTO_1 = require("../models/BlockchainLetheanWalletStartDTO");
var ConfigFileLoadDTO_1 = require("../models/ConfigFileLoadDTO");
var ConfigFileRenderAndLoadDTO_1 = require("../models/ConfigFileRenderAndLoadDTO");
var ConfigFileRenderDTO_1 = require("../models/ConfigFileRenderDTO");
var ConfigFileRenderStringDTO_1 = require("../models/ConfigFileRenderStringDTO");
var ConfigObjectClearDTO_1 = require("../models/ConfigObjectClearDTO");
var ConfigObjectCountDTO_1 = require("../models/ConfigObjectCountDTO");
var ConfigObjectGetDTO_1 = require("../models/ConfigObjectGetDTO");
var ConfigObjectRemoveDTO_1 = require("../models/ConfigObjectRemoveDTO");
var ConfigObjectSetDTO_1 = require("../models/ConfigObjectSetDTO");
var CreateAccountDTO_1 = require("../models/CreateAccountDTO");
var CreateAccountResponseDTO_1 = require("../models/CreateAccountResponseDTO");
var CreateFileDTO_1 = require("../models/CreateFileDTO");
var DeleteAccountDTO_1 = require("../models/DeleteAccountDTO");
var EncryptedRequestDTO_1 = require("../models/EncryptedRequestDTO");
var EncryptedResponseDTO_1 = require("../models/EncryptedResponseDTO");
var FileDownloadRequest_1 = require("../models/FileDownloadRequest");
var FilePathCheckDTO_1 = require("../models/FilePathCheckDTO");
var FilePathDTO_1 = require("../models/FilePathDTO");
var HashDTO_1 = require("../models/HashDTO");
var INIObjectParseJSONDTO_1 = require("../models/INIObjectParseJSONDTO");
var OpenPGPCreateKeyPairDTO_1 = require("../models/OpenPGPCreateKeyPairDTO");
var OpenPGPDecryptBYIDDTO_1 = require("../models/OpenPGPDecryptBYIDDTO");
var OpenPGPEncryptBYIDDTO_1 = require("../models/OpenPGPEncryptBYIDDTO");
var OpenPGPGetPublicKeyDTO_1 = require("../models/OpenPGPGetPublicKeyDTO");
var OpenPGPSignBYIDDTO_1 = require("../models/OpenPGPSignBYIDDTO");
var OpenPGPVerifyBYIDDTO_1 = require("../models/OpenPGPVerifyBYIDDTO");
var ProcessAddDTO_1 = require("../models/ProcessAddDTO");
var ProcessKillDTO_1 = require("../models/ProcessKillDTO");
var ProcessRunDTO_1 = require("../models/ProcessRunDTO");
var ProcessStartDTO_1 = require("../models/ProcessStartDTO");
var ProcessStopDTO_1 = require("../models/ProcessStopDTO");
var QuasiSaltHashDTO_1 = require("../models/QuasiSaltHashDTO");
var QuasiSaltHashVerifyDTO_1 = require("../models/QuasiSaltHashVerifyDTO");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([]);
var typeMap = {
    "BlockchainLetheanDaemonStartDTO": BlockchainLetheanDaemonStartDTO_1.BlockchainLetheanDaemonStartDTO,
    "BlockchainLetheanRPCDTO": BlockchainLetheanRPCDTO_1.BlockchainLetheanRPCDTO,
    "BlockchainLetheanWalletStartDTO": BlockchainLetheanWalletStartDTO_1.BlockchainLetheanWalletStartDTO,
    "ConfigFileLoadDTO": ConfigFileLoadDTO_1.ConfigFileLoadDTO,
    "ConfigFileRenderAndLoadDTO": ConfigFileRenderAndLoadDTO_1.ConfigFileRenderAndLoadDTO,
    "ConfigFileRenderDTO": ConfigFileRenderDTO_1.ConfigFileRenderDTO,
    "ConfigFileRenderStringDTO": ConfigFileRenderStringDTO_1.ConfigFileRenderStringDTO,
    "ConfigObjectClearDTO": ConfigObjectClearDTO_1.ConfigObjectClearDTO,
    "ConfigObjectCountDTO": ConfigObjectCountDTO_1.ConfigObjectCountDTO,
    "ConfigObjectGetDTO": ConfigObjectGetDTO_1.ConfigObjectGetDTO,
    "ConfigObjectRemoveDTO": ConfigObjectRemoveDTO_1.ConfigObjectRemoveDTO,
    "ConfigObjectSetDTO": ConfigObjectSetDTO_1.ConfigObjectSetDTO,
    "CreateAccountDTO": CreateAccountDTO_1.CreateAccountDTO,
    "CreateAccountResponseDTO": CreateAccountResponseDTO_1.CreateAccountResponseDTO,
    "CreateFileDTO": CreateFileDTO_1.CreateFileDTO,
    "DeleteAccountDTO": DeleteAccountDTO_1.DeleteAccountDTO,
    "EncryptedRequestDTO": EncryptedRequestDTO_1.EncryptedRequestDTO,
    "EncryptedResponseDTO": EncryptedResponseDTO_1.EncryptedResponseDTO,
    "FileDownloadRequest": FileDownloadRequest_1.FileDownloadRequest,
    "FilePathCheckDTO": FilePathCheckDTO_1.FilePathCheckDTO,
    "FilePathDTO": FilePathDTO_1.FilePathDTO,
    "HashDTO": HashDTO_1.HashDTO,
    "INIObjectParseJSONDTO": INIObjectParseJSONDTO_1.INIObjectParseJSONDTO,
    "OpenPGPCreateKeyPairDTO": OpenPGPCreateKeyPairDTO_1.OpenPGPCreateKeyPairDTO,
    "OpenPGPDecryptBYIDDTO": OpenPGPDecryptBYIDDTO_1.OpenPGPDecryptBYIDDTO,
    "OpenPGPEncryptBYIDDTO": OpenPGPEncryptBYIDDTO_1.OpenPGPEncryptBYIDDTO,
    "OpenPGPGetPublicKeyDTO": OpenPGPGetPublicKeyDTO_1.OpenPGPGetPublicKeyDTO,
    "OpenPGPSignBYIDDTO": OpenPGPSignBYIDDTO_1.OpenPGPSignBYIDDTO,
    "OpenPGPVerifyBYIDDTO": OpenPGPVerifyBYIDDTO_1.OpenPGPVerifyBYIDDTO,
    "ProcessAddDTO": ProcessAddDTO_1.ProcessAddDTO,
    "ProcessKillDTO": ProcessKillDTO_1.ProcessKillDTO,
    "ProcessRunDTO": ProcessRunDTO_1.ProcessRunDTO,
    "ProcessStartDTO": ProcessStartDTO_1.ProcessStartDTO,
    "ProcessStopDTO": ProcessStopDTO_1.ProcessStopDTO,
    "QuasiSaltHashDTO": QuasiSaltHashDTO_1.QuasiSaltHashDTO,
    "QuasiSaltHashVerifyDTO": QuasiSaltHashVerifyDTO_1.QuasiSaltHashVerifyDTO,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "text/plain") {
            return String(data);
        }
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "text/plain") {
            return rawData;
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map