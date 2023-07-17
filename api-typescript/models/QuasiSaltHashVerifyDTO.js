"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuasiSaltHashVerifyDTO = void 0;
var QuasiSaltHashVerifyDTO = (function () {
    function QuasiSaltHashVerifyDTO() {
    }
    QuasiSaltHashVerifyDTO.getAttributeTypeMap = function () {
        return QuasiSaltHashVerifyDTO.attributeTypeMap;
    };
    QuasiSaltHashVerifyDTO.discriminator = undefined;
    QuasiSaltHashVerifyDTO.attributeTypeMap = [
        {
            "name": "input",
            "baseName": "input",
            "type": "string",
            "format": ""
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        }
    ];
    return QuasiSaltHashVerifyDTO;
}());
exports.QuasiSaltHashVerifyDTO = QuasiSaltHashVerifyDTO;
//# sourceMappingURL=QuasiSaltHashVerifyDTO.js.map