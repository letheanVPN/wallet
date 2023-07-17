"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigObjectSetDTO = void 0;
var ConfigObjectSetDTO = (function () {
    function ConfigObjectSetDTO() {
    }
    ConfigObjectSetDTO.getAttributeTypeMap = function () {
        return ConfigObjectSetDTO.attributeTypeMap;
    };
    ConfigObjectSetDTO.discriminator = undefined;
    ConfigObjectSetDTO.attributeTypeMap = [
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
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
    return ConfigObjectSetDTO;
}());
exports.ConfigObjectSetDTO = ConfigObjectSetDTO;
//# sourceMappingURL=ConfigObjectSetDTO.js.map