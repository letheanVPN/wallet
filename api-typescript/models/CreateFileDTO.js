"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFileDTO = void 0;
var CreateFileDTO = (function () {
    function CreateFileDTO() {
    }
    CreateFileDTO.getAttributeTypeMap = function () {
        return CreateFileDTO.attributeTypeMap;
    };
    CreateFileDTO.discriminator = undefined;
    CreateFileDTO.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        }
    ];
    return CreateFileDTO;
}());
exports.CreateFileDTO = CreateFileDTO;
//# sourceMappingURL=CreateFileDTO.js.map