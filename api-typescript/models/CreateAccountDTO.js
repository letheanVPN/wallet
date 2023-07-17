"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountDTO = void 0;
var CreateAccountDTO = (function () {
    function CreateAccountDTO() {
    }
    CreateAccountDTO.getAttributeTypeMap = function () {
        return CreateAccountDTO.attributeTypeMap;
    };
    CreateAccountDTO.discriminator = undefined;
    CreateAccountDTO.attributeTypeMap = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }
    ];
    return CreateAccountDTO;
}());
exports.CreateAccountDTO = CreateAccountDTO;
//# sourceMappingURL=CreateAccountDTO.js.map