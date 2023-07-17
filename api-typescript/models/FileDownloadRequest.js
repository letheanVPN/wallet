"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDownloadRequest = void 0;
var FileDownloadRequest = (function () {
    function FileDownloadRequest() {
    }
    FileDownloadRequest.getAttributeTypeMap = function () {
        return FileDownloadRequest.attributeTypeMap;
    };
    FileDownloadRequest.discriminator = undefined;
    FileDownloadRequest.attributeTypeMap = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "string",
            "format": ""
        },
        {
            "name": "dir",
            "baseName": "dir",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number",
            "format": ""
        }
    ];
    return FileDownloadRequest;
}());
exports.FileDownloadRequest = FileDownloadRequest;
//# sourceMappingURL=FileDownloadRequest.js.map