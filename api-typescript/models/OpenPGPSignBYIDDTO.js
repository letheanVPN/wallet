"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPGPSignBYIDDTO = void 0;
var OpenPGPSignBYIDDTO = (function () {
    function OpenPGPSignBYIDDTO() {
    }
    OpenPGPSignBYIDDTO.getAttributeTypeMap = function () {
        return OpenPGPSignBYIDDTO.attributeTypeMap;
    };
    OpenPGPSignBYIDDTO.discriminator = undefined;
    OpenPGPSignBYIDDTO.attributeTypeMap = [
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
    return OpenPGPSignBYIDDTO;
}());
exports.OpenPGPSignBYIDDTO = OpenPGPSignBYIDDTO;
//# sourceMappingURL=OpenPGPSignBYIDDTO.js.map