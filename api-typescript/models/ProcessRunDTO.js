"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessRunDTO = void 0;
var ProcessRunDTO = (function () {
    function ProcessRunDTO() {
    }
    ProcessRunDTO.getAttributeTypeMap = function () {
        return ProcessRunDTO.attributeTypeMap;
    };
    ProcessRunDTO.discriminator = undefined;
    ProcessRunDTO.attributeTypeMap = [
        {
            "name": "command",
            "baseName": "command",
            "type": "string",
            "format": ""
        },
        {
            "name": "args",
            "baseName": "args",
            "type": "Array",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "ProcessAddDTO",
            "format": ""
        }
    ];
    return ProcessRunDTO;
}());
exports.ProcessRunDTO = ProcessRunDTO;
//# sourceMappingURL=ProcessRunDTO.js.map