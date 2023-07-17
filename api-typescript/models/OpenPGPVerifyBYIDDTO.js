"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPGPVerifyBYIDDTO = void 0;
var OpenPGPVerifyBYIDDTO = (function () {
    function OpenPGPVerifyBYIDDTO() {
    }
    OpenPGPVerifyBYIDDTO.getAttributeTypeMap = function () {
        return OpenPGPVerifyBYIDDTO.attributeTypeMap;
    };
    OpenPGPVerifyBYIDDTO.discriminator = undefined;
    OpenPGPVerifyBYIDDTO.attributeTypeMap = [
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
        }
    ];
    return OpenPGPVerifyBYIDDTO;
}());
exports.OpenPGPVerifyBYIDDTO = OpenPGPVerifyBYIDDTO;
//# sourceMappingURL=OpenPGPVerifyBYIDDTO.js.map