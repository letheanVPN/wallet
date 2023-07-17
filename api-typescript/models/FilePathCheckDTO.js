"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePathCheckDTO = void 0;
var FilePathCheckDTO = (function () {
    function FilePathCheckDTO() {
    }
    FilePathCheckDTO.getAttributeTypeMap = function () {
        return FilePathCheckDTO.attributeTypeMap;
    };
    FilePathCheckDTO.discriminator = undefined;
    FilePathCheckDTO.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "boolean",
            "format": ""
        }
    ];
    return FilePathCheckDTO;
}());
exports.FilePathCheckDTO = FilePathCheckDTO;
//# sourceMappingURL=FilePathCheckDTO.js.map