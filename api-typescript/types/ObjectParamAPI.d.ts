import { Configuration } from '../configuration';
import { BlockchainLetheanDaemonStartDTO } from '../models/BlockchainLetheanDaemonStartDTO';
import { BlockchainLetheanRPCDTO } from '../models/BlockchainLetheanRPCDTO';
import { BlockchainLetheanWalletStartDTO } from '../models/BlockchainLetheanWalletStartDTO';
import { ConfigFileLoadDTO } from '../models/ConfigFileLoadDTO';
import { ConfigFileRenderAndLoadDTO } from '../models/ConfigFileRenderAndLoadDTO';
import { ConfigFileRenderDTO } from '../models/ConfigFileRenderDTO';
import { ConfigFileRenderStringDTO } from '../models/ConfigFileRenderStringDTO';
import { ConfigObjectClearDTO } from '../models/ConfigObjectClearDTO';
import { ConfigObjectCountDTO } from '../models/ConfigObjectCountDTO';
import { ConfigObjectGetDTO } from '../models/ConfigObjectGetDTO';
import { ConfigObjectRemoveDTO } from '../models/ConfigObjectRemoveDTO';
import { ConfigObjectSetDTO } from '../models/ConfigObjectSetDTO';
import { CreateAccountDTO } from '../models/CreateAccountDTO';
import { CreateAccountResponseDTO } from '../models/CreateAccountResponseDTO';
import { CreateFileDTO } from '../models/CreateFileDTO';
import { DeleteAccountDTO } from '../models/DeleteAccountDTO';
import { EncryptedRequestDTO } from '../models/EncryptedRequestDTO';
import { EncryptedResponseDTO } from '../models/EncryptedResponseDTO';
import { FileDownloadRequest } from '../models/FileDownloadRequest';
import { FilePathCheckDTO } from '../models/FilePathCheckDTO';
import { FilePathDTO } from '../models/FilePathDTO';
import { HashDTO } from '../models/HashDTO';
import { INIObjectParseJSONDTO } from '../models/INIObjectParseJSONDTO';
import { OpenPGPCreateKeyPairDTO } from '../models/OpenPGPCreateKeyPairDTO';
import { OpenPGPDecryptBYIDDTO } from '../models/OpenPGPDecryptBYIDDTO';
import { OpenPGPEncryptBYIDDTO } from '../models/OpenPGPEncryptBYIDDTO';
import { OpenPGPGetPublicKeyDTO } from '../models/OpenPGPGetPublicKeyDTO';
import { OpenPGPSignBYIDDTO } from '../models/OpenPGPSignBYIDDTO';
import { OpenPGPVerifyBYIDDTO } from '../models/OpenPGPVerifyBYIDDTO';
import { ProcessAddDTO } from '../models/ProcessAddDTO';
import { ProcessKillDTO } from '../models/ProcessKillDTO';
import { ProcessRunDTO } from '../models/ProcessRunDTO';
import { ProcessStartDTO } from '../models/ProcessStartDTO';
import { ProcessStopDTO } from '../models/ProcessStopDTO';
import { QuasiSaltHashDTO } from '../models/QuasiSaltHashDTO';
import { QuasiSaltHashVerifyDTO } from '../models/QuasiSaltHashVerifyDTO';
import { AppsApiRequestFactory, AppsApiResponseProcessor } from "../apis/AppsApi";
export interface AppsApiGetMarketPlaceAppsRequest {
}
export interface AppsApiInstallAppRequest {
}
export interface AppsApiListAppsRequest {
}
export interface AppsApiRemoveAppRequest {
}
export declare class ObjectAppsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AppsApiRequestFactory, responseProcessor?: AppsApiResponseProcessor);
    getMarketPlaceApps(param?: AppsApiGetMarketPlaceAppsRequest, options?: Configuration): Promise<string>;
    installApp(param?: AppsApiInstallAppRequest, options?: Configuration): Promise<any>;
    listApps(param?: AppsApiListAppsRequest, options?: Configuration): Promise<string>;
    removeApp(param?: AppsApiRemoveAppRequest, options?: Configuration): Promise<any>;
}
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export interface AuthApiDeleteRequest {
    deleteAccountDTO: DeleteAccountDTO;
}
export interface AuthApiCreateRequest {
    createAccountDTO: CreateAccountDTO;
}
export interface AuthApiLoginRequest {
    encryptedRequestDTO: EncryptedRequestDTO;
}
export declare class ObjectAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    _delete(param: AuthApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param: AuthApiCreateRequest, options?: Configuration): Promise<CreateAccountResponseDTO>;
    login(param: AuthApiLoginRequest, options?: Configuration): Promise<EncryptedResponseDTO>;
}
import { BlockchainApiRequestFactory, BlockchainApiResponseProcessor } from "../apis/BlockchainApi";
export interface BlockchainApiDownloadDaemonRequest {
    body: any;
}
export interface BlockchainApiExportBlockchainRequest {
    body: any;
}
export interface BlockchainApiImportBlockchainRequest {
    body: any;
}
export interface BlockchainApiJsonRpcRequest {
    blockchainLetheanRPCDTO: BlockchainLetheanRPCDTO;
}
export interface BlockchainApiStartDaemonRequest {
    blockchainLetheanDaemonStartDTO: BlockchainLetheanDaemonStartDTO;
}
export interface BlockchainApiStartWalletRequest {
    blockchainLetheanWalletStartDTO: BlockchainLetheanWalletStartDTO;
}
export interface BlockchainApiWalletJsonRpcRequest {
    body: any;
}
export declare class ObjectBlockchainApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BlockchainApiRequestFactory, responseProcessor?: BlockchainApiResponseProcessor);
    downloadDaemon(param: BlockchainApiDownloadDaemonRequest, options?: Configuration): Promise<void>;
    exportBlockchain(param: BlockchainApiExportBlockchainRequest, options?: Configuration): Promise<void>;
    importBlockchain(param: BlockchainApiImportBlockchainRequest, options?: Configuration): Promise<void>;
    jsonRpc(param: BlockchainApiJsonRpcRequest, options?: Configuration): Promise<string>;
    startDaemon(param: BlockchainApiStartDaemonRequest, options?: Configuration): Promise<void>;
    startWallet(param: BlockchainApiStartWalletRequest, options?: Configuration): Promise<void>;
    walletJsonRpc(param: BlockchainApiWalletJsonRpcRequest, options?: Configuration): Promise<string>;
}
import { ConfigApiRequestFactory, ConfigApiResponseProcessor } from "../apis/ConfigApi";
export interface ConfigApiClearConfigRequest {
    configObjectClearDTO: ConfigObjectClearDTO;
}
export interface ConfigApiCountConfigRequest {
    configObjectCountDTO: ConfigObjectCountDTO;
}
export interface ConfigApiGetConfigRequest {
    configObjectGetDTO: ConfigObjectGetDTO;
}
export interface ConfigApiLoadRequest {
    configFileLoadDTO: ConfigFileLoadDTO;
}
export interface ConfigApiParseRequest {
    iNIObjectParseJSONDTO: INIObjectParseJSONDTO;
}
export interface ConfigApiRemoveConfigRequest {
    configObjectRemoveDTO: ConfigObjectRemoveDTO;
}
export interface ConfigApiRenderRequest {
    configFileRenderDTO: ConfigFileRenderDTO;
}
export interface ConfigApiRenderAndLoadRequest {
    configFileRenderAndLoadDTO: ConfigFileRenderAndLoadDTO;
}
export interface ConfigApiRenderStringRequest {
    configFileRenderStringDTO: ConfigFileRenderStringDTO;
}
export interface ConfigApiSetConfigRequest {
    configObjectSetDTO: ConfigObjectSetDTO;
}
export declare class ObjectConfigApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ConfigApiRequestFactory, responseProcessor?: ConfigApiResponseProcessor);
    clearConfig(param: ConfigApiClearConfigRequest, options?: Configuration): Promise<void>;
    countConfig(param: ConfigApiCountConfigRequest, options?: Configuration): Promise<void>;
    getConfig(param: ConfigApiGetConfigRequest, options?: Configuration): Promise<void>;
    load(param: ConfigApiLoadRequest, options?: Configuration): Promise<void>;
    parse(param: ConfigApiParseRequest, options?: Configuration): Promise<void>;
    removeConfig(param: ConfigApiRemoveConfigRequest, options?: Configuration): Promise<void>;
    render(param: ConfigApiRenderRequest, options?: Configuration): Promise<void>;
    renderAndLoad(param: ConfigApiRenderAndLoadRequest, options?: Configuration): Promise<void>;
    renderString(param: ConfigApiRenderStringRequest, options?: Configuration): Promise<void>;
    setConfig(param: ConfigApiSetConfigRequest, options?: Configuration): Promise<void>;
}
import { CryptographyApiRequestFactory, CryptographyApiResponseProcessor } from "../apis/CryptographyApi";
export interface CryptographyApiCreateQuasiSaltRequest {
    quasiSaltHashDTO: QuasiSaltHashDTO;
}
export interface CryptographyApiDecryptRequest {
    openPGPDecryptBYIDDTO: OpenPGPDecryptBYIDDTO;
}
export interface CryptographyApiEncryptRequest {
    openPGPEncryptBYIDDTO: OpenPGPEncryptBYIDDTO;
}
export interface CryptographyApiGenerateKeyPairRequest {
    openPGPCreateKeyPairDTO: OpenPGPCreateKeyPairDTO;
}
export interface CryptographyApiGetPublicKeyRequest {
    openPGPGetPublicKeyDTO: OpenPGPGetPublicKeyDTO;
}
export interface CryptographyApiSha256Request {
    hashDTO: HashDTO;
}
export interface CryptographyApiSha384Request {
    hashDTO: HashDTO;
}
export interface CryptographyApiSha512Request {
    hashDTO: HashDTO;
}
export interface CryptographyApiSignRequest {
    openPGPSignBYIDDTO: OpenPGPSignBYIDDTO;
}
export interface CryptographyApiVerifyRequest {
    openPGPVerifyBYIDDTO: OpenPGPVerifyBYIDDTO;
}
export interface CryptographyApiVerifyQuasiSaltRequest {
    quasiSaltHashVerifyDTO: QuasiSaltHashVerifyDTO;
}
export declare class ObjectCryptographyApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CryptographyApiRequestFactory, responseProcessor?: CryptographyApiResponseProcessor);
    createQuasiSalt(param: CryptographyApiCreateQuasiSaltRequest, options?: Configuration): Promise<void>;
    decrypt(param: CryptographyApiDecryptRequest, options?: Configuration): Promise<void>;
    encrypt(param: CryptographyApiEncryptRequest, options?: Configuration): Promise<void>;
    generateKeyPair(param: CryptographyApiGenerateKeyPairRequest, options?: Configuration): Promise<void>;
    getPublicKey(param: CryptographyApiGetPublicKeyRequest, options?: Configuration): Promise<void>;
    sha256(param: CryptographyApiSha256Request, options?: Configuration): Promise<void>;
    sha384(param: CryptographyApiSha384Request, options?: Configuration): Promise<void>;
    sha512(param: CryptographyApiSha512Request, options?: Configuration): Promise<void>;
    sign(param: CryptographyApiSignRequest, options?: Configuration): Promise<void>;
    verify(param: CryptographyApiVerifyRequest, options?: Configuration): Promise<void>;
    verifyQuasiSalt(param: CryptographyApiVerifyQuasiSaltRequest, options?: Configuration): Promise<void>;
}
import { InfoApiRequestFactory, InfoApiResponseProcessor } from "../apis/InfoApi";
export interface InfoApiWelcomePageRequest {
}
export declare class ObjectInfoApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor);
    welcomePage(param?: InfoApiWelcomePageRequest, options?: Configuration): Promise<void>;
}
import { InputOutputApiRequestFactory, InputOutputApiResponseProcessor } from "../apis/InputOutputApi";
export interface InputOutputApiFetchFileRequest {
    fileDownloadRequest: FileDownloadRequest;
}
export interface InputOutputApiGetDetailedDirectoryListRequest {
    filePathDTO: FilePathDTO;
}
export interface InputOutputApiGetDirectoryListRequest {
    filePathDTO: FilePathDTO;
}
export interface InputOutputApiIsDirRequest {
    filePathDTO: FilePathDTO;
}
export interface InputOutputApiIsFileRequest {
    filePathDTO: FilePathDTO;
}
export interface InputOutputApiReadFileRequest {
    filePathDTO: FilePathDTO;
}
export interface InputOutputApiWriteFileRequest {
    createFileDTO: CreateFileDTO;
}
export declare class ObjectInputOutputApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InputOutputApiRequestFactory, responseProcessor?: InputOutputApiResponseProcessor);
    fetchFile(param: InputOutputApiFetchFileRequest, options?: Configuration): Promise<void>;
    getDetailedDirectoryList(param: InputOutputApiGetDetailedDirectoryListRequest, options?: Configuration): Promise<void>;
    getDirectoryList(param: InputOutputApiGetDirectoryListRequest, options?: Configuration): Promise<void>;
    isDir(param: InputOutputApiIsDirRequest, options?: Configuration): Promise<FilePathCheckDTO>;
    isFile(param: InputOutputApiIsFileRequest, options?: Configuration): Promise<FilePathCheckDTO>;
    readFile(param: InputOutputApiReadFileRequest, options?: Configuration): Promise<void>;
    writeFile(param: InputOutputApiWriteFileRequest, options?: Configuration): Promise<void>;
}
import { ProcessApiRequestFactory, ProcessApiResponseProcessor } from "../apis/ProcessApi";
export interface ProcessApiAddProcessRequest {
    processAddDTO: ProcessAddDTO;
}
export interface ProcessApiKillProcessRequest {
    processKillDTO: ProcessKillDTO;
}
export interface ProcessApiRunProcessRequest {
    processRunDTO: ProcessRunDTO;
}
export interface ProcessApiStartProcessRequest {
    processStartDTO: ProcessStartDTO;
}
export interface ProcessApiStopProcessRequest {
    processStopDTO: ProcessStopDTO;
}
export declare class ObjectProcessApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProcessApiRequestFactory, responseProcessor?: ProcessApiResponseProcessor);
    addProcess(param: ProcessApiAddProcessRequest, options?: Configuration): Promise<void>;
    killProcess(param: ProcessApiKillProcessRequest, options?: Configuration): Promise<void>;
    runProcess(param: ProcessApiRunProcessRequest, options?: Configuration): Promise<void>;
    startProcess(param: ProcessApiStartProcessRequest, options?: Configuration): Promise<void>;
    stopProcess(param: ProcessApiStopProcessRequest, options?: Configuration): Promise<void>;
}
import { SystemApiRequestFactory, SystemApiResponseProcessor } from "../apis/SystemApi";
export interface SystemApiCheckServerRequest {
}
export interface SystemApiGetServerCertificateRequest {
}
export declare class ObjectSystemApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SystemApiRequestFactory, responseProcessor?: SystemApiResponseProcessor);
    checkServer(param?: SystemApiCheckServerRequest, options?: Configuration): Promise<void>;
    getServerCertificate(param?: SystemApiGetServerCertificateRequest, options?: Configuration): Promise<void>;
}
