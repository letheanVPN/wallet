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
export declare class PromiseAppsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AppsApiRequestFactory, responseProcessor?: AppsApiResponseProcessor);
    getMarketPlaceApps(_options?: Configuration): Promise<string>;
    installApp(_options?: Configuration): Promise<any>;
    listApps(_options?: Configuration): Promise<string>;
    removeApp(_options?: Configuration): Promise<any>;
}
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class PromiseAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    _delete(deleteAccountDTO: DeleteAccountDTO, _options?: Configuration): Promise<void>;
    create(createAccountDTO: CreateAccountDTO, _options?: Configuration): Promise<CreateAccountResponseDTO>;
    login(encryptedRequestDTO: EncryptedRequestDTO, _options?: Configuration): Promise<EncryptedResponseDTO>;
}
import { BlockchainApiRequestFactory, BlockchainApiResponseProcessor } from "../apis/BlockchainApi";
export declare class PromiseBlockchainApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BlockchainApiRequestFactory, responseProcessor?: BlockchainApiResponseProcessor);
    downloadDaemon(body: any, _options?: Configuration): Promise<void>;
    exportBlockchain(body: any, _options?: Configuration): Promise<void>;
    importBlockchain(body: any, _options?: Configuration): Promise<void>;
    jsonRpc(blockchainLetheanRPCDTO: BlockchainLetheanRPCDTO, _options?: Configuration): Promise<string>;
    startDaemon(blockchainLetheanDaemonStartDTO: BlockchainLetheanDaemonStartDTO, _options?: Configuration): Promise<void>;
    startWallet(blockchainLetheanWalletStartDTO: BlockchainLetheanWalletStartDTO, _options?: Configuration): Promise<void>;
    walletJsonRpc(body: any, _options?: Configuration): Promise<string>;
}
import { ConfigApiRequestFactory, ConfigApiResponseProcessor } from "../apis/ConfigApi";
export declare class PromiseConfigApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ConfigApiRequestFactory, responseProcessor?: ConfigApiResponseProcessor);
    clearConfig(configObjectClearDTO: ConfigObjectClearDTO, _options?: Configuration): Promise<void>;
    countConfig(configObjectCountDTO: ConfigObjectCountDTO, _options?: Configuration): Promise<void>;
    getConfig(configObjectGetDTO: ConfigObjectGetDTO, _options?: Configuration): Promise<void>;
    load(configFileLoadDTO: ConfigFileLoadDTO, _options?: Configuration): Promise<void>;
    parse(iNIObjectParseJSONDTO: INIObjectParseJSONDTO, _options?: Configuration): Promise<void>;
    removeConfig(configObjectRemoveDTO: ConfigObjectRemoveDTO, _options?: Configuration): Promise<void>;
    render(configFileRenderDTO: ConfigFileRenderDTO, _options?: Configuration): Promise<void>;
    renderAndLoad(configFileRenderAndLoadDTO: ConfigFileRenderAndLoadDTO, _options?: Configuration): Promise<void>;
    renderString(configFileRenderStringDTO: ConfigFileRenderStringDTO, _options?: Configuration): Promise<void>;
    setConfig(configObjectSetDTO: ConfigObjectSetDTO, _options?: Configuration): Promise<void>;
}
import { CryptographyApiRequestFactory, CryptographyApiResponseProcessor } from "../apis/CryptographyApi";
export declare class PromiseCryptographyApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CryptographyApiRequestFactory, responseProcessor?: CryptographyApiResponseProcessor);
    createQuasiSalt(quasiSaltHashDTO: QuasiSaltHashDTO, _options?: Configuration): Promise<void>;
    decrypt(openPGPDecryptBYIDDTO: OpenPGPDecryptBYIDDTO, _options?: Configuration): Promise<void>;
    encrypt(openPGPEncryptBYIDDTO: OpenPGPEncryptBYIDDTO, _options?: Configuration): Promise<void>;
    generateKeyPair(openPGPCreateKeyPairDTO: OpenPGPCreateKeyPairDTO, _options?: Configuration): Promise<void>;
    getPublicKey(openPGPGetPublicKeyDTO: OpenPGPGetPublicKeyDTO, _options?: Configuration): Promise<void>;
    sha256(hashDTO: HashDTO, _options?: Configuration): Promise<void>;
    sha384(hashDTO: HashDTO, _options?: Configuration): Promise<void>;
    sha512(hashDTO: HashDTO, _options?: Configuration): Promise<void>;
    sign(openPGPSignBYIDDTO: OpenPGPSignBYIDDTO, _options?: Configuration): Promise<void>;
    verify(openPGPVerifyBYIDDTO: OpenPGPVerifyBYIDDTO, _options?: Configuration): Promise<void>;
    verifyQuasiSalt(quasiSaltHashVerifyDTO: QuasiSaltHashVerifyDTO, _options?: Configuration): Promise<void>;
}
import { InfoApiRequestFactory, InfoApiResponseProcessor } from "../apis/InfoApi";
export declare class PromiseInfoApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor);
    welcomePage(_options?: Configuration): Promise<void>;
}
import { InputOutputApiRequestFactory, InputOutputApiResponseProcessor } from "../apis/InputOutputApi";
export declare class PromiseInputOutputApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InputOutputApiRequestFactory, responseProcessor?: InputOutputApiResponseProcessor);
    fetchFile(fileDownloadRequest: FileDownloadRequest, _options?: Configuration): Promise<void>;
    getDetailedDirectoryList(filePathDTO: FilePathDTO, _options?: Configuration): Promise<void>;
    getDirectoryList(filePathDTO: FilePathDTO, _options?: Configuration): Promise<void>;
    isDir(filePathDTO: FilePathDTO, _options?: Configuration): Promise<FilePathCheckDTO>;
    isFile(filePathDTO: FilePathDTO, _options?: Configuration): Promise<FilePathCheckDTO>;
    readFile(filePathDTO: FilePathDTO, _options?: Configuration): Promise<void>;
    writeFile(createFileDTO: CreateFileDTO, _options?: Configuration): Promise<void>;
}
import { ProcessApiRequestFactory, ProcessApiResponseProcessor } from "../apis/ProcessApi";
export declare class PromiseProcessApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProcessApiRequestFactory, responseProcessor?: ProcessApiResponseProcessor);
    addProcess(processAddDTO: ProcessAddDTO, _options?: Configuration): Promise<void>;
    killProcess(processKillDTO: ProcessKillDTO, _options?: Configuration): Promise<void>;
    runProcess(processRunDTO: ProcessRunDTO, _options?: Configuration): Promise<void>;
    startProcess(processStartDTO: ProcessStartDTO, _options?: Configuration): Promise<void>;
    stopProcess(processStopDTO: ProcessStopDTO, _options?: Configuration): Promise<void>;
}
import { SystemApiRequestFactory, SystemApiResponseProcessor } from "../apis/SystemApi";
export declare class PromiseSystemApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SystemApiRequestFactory, responseProcessor?: SystemApiResponseProcessor);
    checkServer(_options?: Configuration): Promise<void>;
    getServerCertificate(_options?: Configuration): Promise<void>;
}
