import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class SystemApiRequestFactory extends BaseAPIRequestFactory {
    checkServer(_options?: Configuration): Promise<RequestContext>;
    getServerCertificate(_options?: Configuration): Promise<RequestContext>;
}
export declare class SystemApiResponseProcessor {
    checkServer(response: ResponseContext): Promise<void>;
    getServerCertificate(response: ResponseContext): Promise<void>;
}
