import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableAppsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AppsApiRequestFactory, responseProcessor?: AppsApiResponseProcessor);
    getMarketPlaceApps(_options?: Configuration): Observable<string>;
    installApp(_options?: Configuration): Observable<any>;
    listApps(_options?: Configuration): Observable<string>;
    removeApp(_options?: Configuration): Observable<any>;
}
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class ObservableAuthApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    _delete(deleteAccountDTO: DeleteAccountDTO, _options?: Configuration): Observable<void>;
    create(createAccountDTO: CreateAccountDTO, _options?: Configuration): Observable<CreateAccountResponseDTO>;
    login(encryptedRequestDTO: EncryptedRequestDTO, _options?: Configuration): Observable<EncryptedResponseDTO>;
}
import { BlockchainApiRequestFactory, BlockchainApiResponseProcessor } from "../apis/BlockchainApi";
export declare class ObservableBlockchainApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BlockchainApiRequestFactory, responseProcessor?: BlockchainApiResponseProcessor);
    downloadDaemon(body: any, _options?: Configuration): Observable<void>;
    exportBlockchain(body: any, _options?: Configuration): Observable<void>;
    importBlockchain(body: any, _options?: Configuration): Observable<void>;
    jsonRpc(blockchainLetheanRPCDTO: BlockchainLetheanRPCDTO, _options?: Configuration): Observable<string>;
    startDaemon(blockchainLetheanDaemonStartDTO: BlockchainLetheanDaemonStartDTO, _options?: Configuration): Observable<void>;
    startWallet(blockchainLetheanWalletStartDTO: BlockchainLetheanWalletStartDTO, _options?: Configuration): Observable<void>;
    walletJsonRpc(body: any, _options?: Configuration): Observable<string>;
}
import { ConfigApiRequestFactory, ConfigApiResponseProcessor } from "../apis/ConfigApi";
export declare class ObservableConfigApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ConfigApiRequestFactory, responseProcessor?: ConfigApiResponseProcessor);
    clearConfig(configObjectClearDTO: ConfigObjectClearDTO, _options?: Configuration): Observable<void>;
    countConfig(configObjectCountDTO: ConfigObjectCountDTO, _options?: Configuration): Observable<void>;
    getConfig(configObjectGetDTO: ConfigObjectGetDTO, _options?: Configuration): Observable<void>;
    load(configFileLoadDTO: ConfigFileLoadDTO, _options?: Configuration): Observable<void>;
    parse(iNIObjectParseJSONDTO: INIObjectParseJSONDTO, _options?: Configuration): Observable<void>;
    removeConfig(configObjectRemoveDTO: ConfigObjectRemoveDTO, _options?: Configuration): Observable<void>;
    render(configFileRenderDTO: ConfigFileRenderDTO, _options?: Configuration): Observable<void>;
    renderAndLoad(configFileRenderAndLoadDTO: ConfigFileRenderAndLoadDTO, _options?: Configuration): Observable<void>;
    renderString(configFileRenderStringDTO: ConfigFileRenderStringDTO, _options?: Configuration): Observable<void>;
    setConfig(configObjectSetDTO: ConfigObjectSetDTO, _options?: Configuration): Observable<void>;
}
import { CryptographyApiRequestFactory, CryptographyApiResponseProcessor } from "../apis/CryptographyApi";
export declare class ObservableCryptographyApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CryptographyApiRequestFactory, responseProcessor?: CryptographyApiResponseProcessor);
    createQuasiSalt(quasiSaltHashDTO: QuasiSaltHashDTO, _options?: Configuration): Observable<void>;
    decrypt(openPGPDecryptBYIDDTO: OpenPGPDecryptBYIDDTO, _options?: Configuration): Observable<void>;
    encrypt(openPGPEncryptBYIDDTO: OpenPGPEncryptBYIDDTO, _options?: Configuration): Observable<void>;
    generateKeyPair(openPGPCreateKeyPairDTO: OpenPGPCreateKeyPairDTO, _options?: Configuration): Observable<void>;
    getPublicKey(openPGPGetPublicKeyDTO: OpenPGPGetPublicKeyDTO, _options?: Configuration): Observable<void>;
    sha256(hashDTO: HashDTO, _options?: Configuration): Observable<void>;
    sha384(hashDTO: HashDTO, _options?: Configuration): Observable<void>;
    sha512(hashDTO: HashDTO, _options?: Configuration): Observable<void>;
    sign(openPGPSignBYIDDTO: OpenPGPSignBYIDDTO, _options?: Configuration): Observable<void>;
    verify(openPGPVerifyBYIDDTO: OpenPGPVerifyBYIDDTO, _options?: Configuration): Observable<void>;
    verifyQuasiSalt(quasiSaltHashVerifyDTO: QuasiSaltHashVerifyDTO, _options?: Configuration): Observable<void>;
}
import { InfoApiRequestFactory, InfoApiResponseProcessor } from "../apis/InfoApi";
export declare class ObservableInfoApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor);
    welcomePage(_options?: Configuration): Observable<void>;
}
import { InputOutputApiRequestFactory, InputOutputApiResponseProcessor } from "../apis/InputOutputApi";
export declare class ObservableInputOutputApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InputOutputApiRequestFactory, responseProcessor?: InputOutputApiResponseProcessor);
    fetchFile(fileDownloadRequest: FileDownloadRequest, _options?: Configuration): Observable<void>;
    getDetailedDirectoryList(filePathDTO: FilePathDTO, _options?: Configuration): Observable<void>;
    getDirectoryList(filePathDTO: FilePathDTO, _options?: Configuration): Observable<void>;
    isDir(filePathDTO: FilePathDTO, _options?: Configuration): Observable<FilePathCheckDTO>;
    isFile(filePathDTO: FilePathDTO, _options?: Configuration): Observable<FilePathCheckDTO>;
    readFile(filePathDTO: FilePathDTO, _options?: Configuration): Observable<void>;
    writeFile(createFileDTO: CreateFileDTO, _options?: Configuration): Observable<void>;
}
import { ProcessApiRequestFactory, ProcessApiResponseProcessor } from "../apis/ProcessApi";
export declare class ObservableProcessApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProcessApiRequestFactory, responseProcessor?: ProcessApiResponseProcessor);
    addProcess(processAddDTO: ProcessAddDTO, _options?: Configuration): Observable<void>;
    killProcess(processKillDTO: ProcessKillDTO, _options?: Configuration): Observable<void>;
    runProcess(processRunDTO: ProcessRunDTO, _options?: Configuration): Observable<void>;
    startProcess(processStartDTO: ProcessStartDTO, _options?: Configuration): Observable<void>;
    stopProcess(processStopDTO: ProcessStopDTO, _options?: Configuration): Observable<void>;
}
import { SystemApiRequestFactory, SystemApiResponseProcessor } from "../apis/SystemApi";
export declare class ObservableSystemApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SystemApiRequestFactory, responseProcessor?: SystemApiResponseProcessor);
    checkServer(_options?: Configuration): Observable<void>;
    getServerCertificate(_options?: Configuration): Observable<void>;
}
