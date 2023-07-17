"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAccountDTO = void 0;
var DeleteAccountDTO = (function () {
    function DeleteAccountDTO() {
    }
    DeleteAccountDTO.getAttributeTypeMap = function () {
        return DeleteAccountDTO.attributeTypeMap;
    };
    DeleteAccountDTO.discriminator = undefined;
    DeleteAccountDTO.attributeTypeMap = [
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
    return DeleteAccountDTO;
}());
exports.DeleteAccountDTO = DeleteAccountDTO;
//# sourceMappingURL=DeleteAccountDTO.js.map