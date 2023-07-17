"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPGPEncryptBYIDDTO = void 0;
var OpenPGPEncryptBYIDDTO = (function () {
    function OpenPGPEncryptBYIDDTO() {
    }
    OpenPGPEncryptBYIDDTO.getAttributeTypeMap = function () {
        return OpenPGPEncryptBYIDDTO.attributeTypeMap;
    };
    OpenPGPEncryptBYIDDTO.discriminator = undefined;
    OpenPGPEncryptBYIDDTO.attributeTypeMap = [
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
        }
    ];
    return OpenPGPEncryptBYIDDTO;
}());
exports.OpenPGPEncryptBYIDDTO = OpenPGPEncryptBYIDDTO;
//# sourceMappingURL=OpenPGPEncryptBYIDDTO.js.map