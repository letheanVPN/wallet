"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessAddDTO = void 0;
var ProcessAddDTO = (function () {
    function ProcessAddDTO() {
    }
    ProcessAddDTO.getAttributeTypeMap = function () {
        return ProcessAddDTO.attributeTypeMap;
    };
    ProcessAddDTO.discriminator = undefined;
    ProcessAddDTO.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "command",
            "baseName": "command",
            "type": "Array",
            "format": ""
        },
        {
            "name": "stdOut",
            "baseName": "stdOut",
            "type": "any",
            "format": ""
        },
        {
            "name": "stdIn",
            "baseName": "stdIn",
            "type": "any",
            "format": ""
        },
        {
            "name": "stdErr",
            "baseName": "stdErr",
            "type": "any",
            "format": ""
        }
    ];
    return ProcessAddDTO;
}());
exports.ProcessAddDTO = ProcessAddDTO;
//# sourceMappingURL=ProcessAddDTO.js.map