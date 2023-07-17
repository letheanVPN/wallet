"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFileRenderDTO = void 0;
var ConfigFileRenderDTO = (function () {
    function ConfigFileRenderDTO() {
    }
    ConfigFileRenderDTO.getAttributeTypeMap = function () {
        return ConfigFileRenderDTO.attributeTypeMap;
    };
    ConfigFileRenderDTO.discriminator = undefined;
    ConfigFileRenderDTO.attributeTypeMap = [
        {
            "name": "file",
            "baseName": "file",
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
    return ConfigFileRenderDTO;
}());
exports.ConfigFileRenderDTO = ConfigFileRenderDTO;
//# sourceMappingURL=ConfigFileRenderDTO.js.map