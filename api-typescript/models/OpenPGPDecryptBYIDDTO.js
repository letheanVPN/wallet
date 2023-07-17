"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPGPDecryptBYIDDTO = void 0;
var OpenPGPDecryptBYIDDTO = (function () {
    function OpenPGPDecryptBYIDDTO() {
    }
    OpenPGPDecryptBYIDDTO.getAttributeTypeMap = function () {
        return OpenPGPDecryptBYIDDTO.attributeTypeMap;
    };
    OpenPGPDecryptBYIDDTO.discriminator = undefined;
    OpenPGPDecryptBYIDDTO.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "passphrase",
            "baseName": "passphrase",
            "type": "string",
            "format": ""
        },
        {
            "name": "signedBy",
            "baseName": "signedBy",
            "type": "string",
            "format": ""
        }
    ];
    return OpenPGPDecryptBYIDDTO;
}());
exports.OpenPGPDecryptBYIDDTO = OpenPGPDecryptBYIDDTO;
//# sourceMappingURL=OpenPGPDecryptBYIDDTO.js.map