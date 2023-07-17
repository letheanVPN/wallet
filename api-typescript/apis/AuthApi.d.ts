import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateAccountDTO } from '../models/CreateAccountDTO';
import { CreateAccountResponseDTO } from '../models/CreateAccountResponseDTO';
import { DeleteAccountDTO } from '../models/DeleteAccountDTO';
import { EncryptedRequestDTO } from '../models/EncryptedRequestDTO';
import { EncryptedResponseDTO } from '../models/EncryptedResponseDTO';
export declare class AuthApiRequestFactory extends BaseAPIRequestFactory {
    _delete(deleteAccountDTO: DeleteAccountDTO, _options?: Configuration): Promise<RequestContext>;
    create(createAccountDTO: CreateAccountDTO, _options?: Configuration): Promise<RequestContext>;
    login(encryptedRequestDTO: EncryptedRequestDTO, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<CreateAccountResponseDTO>;
    login(response: ResponseContext): Promise<EncryptedResponseDTO>;
}
