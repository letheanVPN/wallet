"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptedRequestDTO = void 0;
var EncryptedRequestDTO = (function () {
    function EncryptedRequestDTO() {
    }
    EncryptedRequestDTO.getAttributeTypeMap = function () {
        return EncryptedRequestDTO.attributeTypeMap;
    };
    EncryptedRequestDTO.discriminator = undefined;
    EncryptedRequestDTO.attributeTypeMap = [
        {
            "name": "payload",
            "baseName": "payload",
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
    return EncryptedRequestDTO;
}());
exports.EncryptedRequestDTO = EncryptedRequestDTO;
//# sourceMappingURL=EncryptedRequestDTO.js.map