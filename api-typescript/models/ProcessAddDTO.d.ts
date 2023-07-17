export declare class ProcessAddDTO {
    'key': string;
    'command': [];
    'stdOut': any;
    'stdIn': any;
    'stdErr': any;
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
