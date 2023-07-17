"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPGPCreateKeyPairDTO = void 0;
var OpenPGPCreateKeyPairDTO = (function () {
    function OpenPGPCreateKeyPairDTO() {
    }
    OpenPGPCreateKeyPairDTO.getAttributeTypeMap = function () {
        return OpenPGPCreateKeyPairDTO.attributeTypeMap;
    };
    OpenPGPCreateKeyPairDTO.discriminator = undefined;
    OpenPGPCreateKeyPairDTO.attributeTypeMap = [
        {
            "name": "passphrase",
            "baseName": "passphrase",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return OpenPGPCreateKeyPairDTO;
}());
exports.OpenPGPCreateKeyPairDTO = OpenPGPCreateKeyPairDTO;
//# sourceMappingURL=OpenPGPCreateKeyPairDTO.js.map