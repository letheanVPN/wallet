"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountResponseDTO = void 0;
var CreateAccountResponseDTO = (function () {
    function CreateAccountResponseDTO() {
    }
    CreateAccountResponseDTO.getAttributeTypeMap = function () {
        return CreateAccountResponseDTO.attributeTypeMap;
    };
    CreateAccountResponseDTO.discriminator = undefined;
    CreateAccountResponseDTO.attributeTypeMap = [
        {
            "name": "userhash",
            "baseName": "userhash",
            "type": "string",
            "format": ""
        },
        {
            "name": "pubkey",
            "baseName": "pubkey",
            "type": "string",
            "format": ""
        }
    ];
    return CreateAccountResponseDTO;
}());
exports.CreateAccountResponseDTO = CreateAccountResponseDTO;
//# sourceMappingURL=CreateAccountResponseDTO.js.map