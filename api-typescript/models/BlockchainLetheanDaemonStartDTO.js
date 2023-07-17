"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainLetheanDaemonStartDTO = void 0;
var BlockchainLetheanDaemonStartDTO = (function () {
    function BlockchainLetheanDaemonStartDTO() {
    }
    BlockchainLetheanDaemonStartDTO.getAttributeTypeMap = function () {
        return BlockchainLetheanDaemonStartDTO.attributeTypeMap;
    };
    BlockchainLetheanDaemonStartDTO.discriminator = undefined;
    BlockchainLetheanDaemonStartDTO.attributeTypeMap = [
        {
            "name": "configFile",
            "baseName": "configFile",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataDir",
            "baseName": "dataDir",
            "type": "string",
            "format": ""
        },
        {
            "name": "logDir",
            "baseName": "logDir",
            "type": "string",
            "format": ""
        }
    ];
    return BlockchainLetheanDaemonStartDTO;
}());
exports.BlockchainLetheanDaemonStartDTO = BlockchainLetheanDaemonStartDTO;
//# sourceMappingURL=BlockchainLetheanDaemonStartDTO.js.map