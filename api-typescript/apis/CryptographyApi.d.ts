import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { HashDTO } from '../models/HashDTO';
import { OpenPGPCreateKeyPairDTO } from '../models/OpenPGPCreateKeyPairDTO';
import { OpenPGPDecryptBYIDDTO } from '../models/OpenPGPDecryptBYIDDTO';
import { OpenPGPEncryptBYIDDTO } from '../models/OpenPGPEncryptBYIDDTO';
import { OpenPGPGetPublicKeyDTO } from '../models/OpenPGPGetPublicKeyDTO';
import { OpenPGPSignBYIDDTO } from '../models/OpenPGPSignBYIDDTO';
import { OpenPGPVerifyBYIDDTO } from '../models/OpenPGPVerifyBYIDDTO';
import { QuasiSaltHashDTO } from '../models/QuasiSaltHashDTO';
import { QuasiSaltHashVerifyDTO } from '../models/QuasiSaltHashVerifyDTO';
export declare class CryptographyApiRequestFactory extends BaseAPIRequestFactory {
    createQuasiSalt(quasiSaltHashDTO: QuasiSaltHashDTO, _options?: Configuration): Promise<RequestContext>;
    decrypt(openPGPDecryptBYIDDTO: OpenPGPDecryptBYIDDTO, _options?: Configuration): Promise<RequestContext>;
    encrypt(openPGPEncryptBYIDDTO: OpenPGPEncryptBYIDDTO, _options?: Configuration): Promise<RequestContext>;
    generateKeyPair(openPGPCreateKeyPairDTO: OpenPGPCreateKeyPairDTO, _options?: Configuration): Promise<RequestContext>;
    getPublicKey(openPGPGetPublicKeyDTO: OpenPGPGetPublicKeyDTO, _options?: Configuration): Promise<RequestContext>;
    sha256(hashDTO: HashDTO, _options?: Configuration): Promise<RequestContext>;
    sha384(hashDTO: HashDTO, _options?: Configuration): Promise<RequestContext>;
    sha512(hashDTO: HashDTO, _options?: Configuration): Promise<RequestContext>;
    sign(openPGPSignBYIDDTO: OpenPGPSignBYIDDTO, _options?: Configuration): Promise<RequestContext>;
    verify(openPGPVerifyBYIDDTO: OpenPGPVerifyBYIDDTO, _options?: Configuration): Promise<RequestContext>;
    verifyQuasiSalt(quasiSaltHashVerifyDTO: QuasiSaltHashVerifyDTO, _options?: Configuration): Promise<RequestContext>;
}
export declare class CryptographyApiResponseProcessor {
    createQuasiSalt(response: ResponseContext): Promise<void>;
    decrypt(response: ResponseContext): Promise<void>;
    encrypt(response: ResponseContext): Promise<void>;
    generateKeyPair(response: ResponseContext): Promise<void>;
    getPublicKey(response: ResponseContext): Promise<void>;
    sha256(response: ResponseContext): Promise<void>;
    sha384(response: ResponseContext): Promise<void>;
    sha512(response: ResponseContext): Promise<void>;
    sign(response: ResponseContext): Promise<void>;
    verify(response: ResponseContext): Promise<void>;
    verifyQuasiSalt(response: ResponseContext): Promise<void>;
}
