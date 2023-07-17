import { ConfigObjectGetDTO } from '../models/ConfigObjectGetDTO';
export declare class ConfigFileRenderAndLoadDTO {
    'file': string;
    'model': ConfigObjectGetDTO;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
