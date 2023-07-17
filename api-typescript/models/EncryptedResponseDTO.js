"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptedResponseDTO = void 0;
var EncryptedResponseDTO = (function () {
    function EncryptedResponseDTO() {
    }
    EncryptedResponseDTO.getAttributeTypeMap = function () {
        return EncryptedResponseDTO.attributeTypeMap;
    };
    EncryptedResponseDTO.discriminator = undefined;
    EncryptedResponseDTO.attributeTypeMap = [
        {
            "name": "result",
            "baseName": "result",
            "type": "string",
            "format": ""
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string",
            "format": ""
        }
    ];
    return EncryptedResponseDTO;
}());
exports.EncryptedResponseDTO = EncryptedResponseDTO;
//# sourceMappingURL=EncryptedResponseDTO.js.map