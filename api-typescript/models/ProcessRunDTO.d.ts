import { ProcessAddDTO } from '../models/ProcessAddDTO';
export declare class ProcessRunDTO {
    'command': string;
    'args': [];
    'options': ProcessAddDTO;
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
