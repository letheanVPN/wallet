"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFileRenderStringDTO = void 0;
var ConfigFileRenderStringDTO = (function () {
    function ConfigFileRenderStringDTO() {
    }
    ConfigFileRenderStringDTO.getAttributeTypeMap = function () {
        return ConfigFileRenderStringDTO.attributeTypeMap;
    };
    ConfigFileRenderStringDTO.discriminator = undefined;
    ConfigFileRenderStringDTO.attributeTypeMap = [
        {
            "name": "template",
            "baseName": "template",
            "type": "string",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "any",
            "format": ""
        }
    ];
    return ConfigFileRenderStringDTO;
}());
exports.ConfigFileRenderStringDTO = ConfigFileRenderStringDTO;
//# sourceMappingURL=ConfigFileRenderStringDTO.js.map