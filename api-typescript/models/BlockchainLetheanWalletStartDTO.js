"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainLetheanWalletStartDTO = void 0;
var BlockchainLetheanWalletStartDTO = (function () {
    function BlockchainLetheanWalletStartDTO() {
    }
    BlockchainLetheanWalletStartDTO.getAttributeTypeMap = function () {
        return BlockchainLetheanWalletStartDTO.attributeTypeMap;
    };
    BlockchainLetheanWalletStartDTO.discriminator = undefined;
    BlockchainLetheanWalletStartDTO.attributeTypeMap = [
        {
            "name": "walletDir",
            "baseName": "walletDir",
            "type": "string",
            "format": ""
        },
        {
            "name": "rpcBindPort",
            "baseName": "rpcBindPort",
            "type": "number",
            "format": ""
        },
        {
            "name": "disableRpcLogin",
            "baseName": "disableRpcLogin",
            "type": "boolean",
            "format": ""
        }
    ];
    return BlockchainLetheanWalletStartDTO;
}());
exports.BlockchainLetheanWalletStartDTO = BlockchainLetheanWalletStartDTO;
//# sourceMappingURL=BlockchainLetheanWalletStartDTO.js.map