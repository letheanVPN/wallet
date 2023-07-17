import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateFileDTO } from '../models/CreateFileDTO';
import { FileDownloadRequest } from '../models/FileDownloadRequest';
import { FilePathCheckDTO } from '../models/FilePathCheckDTO';
import { FilePathDTO } from '../models/FilePathDTO';
export declare class InputOutputApiRequestFactory extends BaseAPIRequestFactory {
    fetchFile(fileDownloadRequest: FileDownloadRequest, _options?: Configuration): Promise<RequestContext>;
    getDetailedDirectoryList(filePathDTO: FilePathDTO, _options?: Configuration): Promise<RequestContext>;
    getDirectoryList(filePathDTO: FilePathDTO, _options?: Configuration): Promise<RequestContext>;
    isDir(filePathDTO: FilePathDTO, _options?: Configuration): Promise<RequestContext>;
    isFile(filePathDTO: FilePathDTO, _options?: Configuration): Promise<RequestContext>;
    readFile(filePathDTO: FilePathDTO, _options?: Configuration): Promise<RequestContext>;
    writeFile(createFileDTO: CreateFileDTO, _options?: Configuration): Promise<RequestContext>;
}
export declare class InputOutputApiResponseProcessor {
    fetchFile(response: ResponseContext): Promise<void>;
    getDetailedDirectoryList(response: ResponseContext): Promise<void>;
    getDirectoryList(response: ResponseContext): Promise<void>;
    isDir(response: ResponseContext): Promise<FilePathCheckDTO>;
    isFile(response: ResponseContext): Promise<FilePathCheckDTO>;
    readFile(response: ResponseContext): Promise<void>;
    writeFile(response: ResponseContext): Promise<void>;
}
