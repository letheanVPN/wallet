"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFileRenderAndLoadDTO = void 0;
var ConfigFileRenderAndLoadDTO = (function () {
    function ConfigFileRenderAndLoadDTO() {
    }
    ConfigFileRenderAndLoadDTO.getAttributeTypeMap = function () {
        return ConfigFileRenderAndLoadDTO.attributeTypeMap;
    };
    ConfigFileRenderAndLoadDTO.discriminator = undefined;
    ConfigFileRenderAndLoadDTO.attributeTypeMap = [
        {
            "name": "file",
            "baseName": "file",
            "type": "string",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "ConfigObjectGetDTO",
            "format": ""
        }
    ];
    return ConfigFileRenderAndLoadDTO;
}());
exports.ConfigFileRenderAndLoadDTO = ConfigFileRenderAndLoadDTO;
//# sourceMappingURL=ConfigFileRenderAndLoadDTO.js.map