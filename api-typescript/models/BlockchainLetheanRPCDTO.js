"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainLetheanRPCDTO = void 0;
var BlockchainLetheanRPCDTO = (function () {
    function BlockchainLetheanRPCDTO() {
    }
    BlockchainLetheanRPCDTO.getAttributeTypeMap = function () {
        return BlockchainLetheanRPCDTO.attributeTypeMap;
    };
    BlockchainLetheanRPCDTO.discriminator = undefined;
    BlockchainLetheanRPCDTO.attributeTypeMap = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "req",
            "baseName": "req",
            "type": "string",
            "format": ""
        }
    ];
    return BlockchainLetheanRPCDTO;
}());
exports.BlockchainLetheanRPCDTO = BlockchainLetheanRPCDTO;
//# sourceMappingURL=BlockchainLetheanRPCDTO.js.map