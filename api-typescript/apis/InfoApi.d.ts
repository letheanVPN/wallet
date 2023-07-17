import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class InfoApiRequestFactory extends BaseAPIRequestFactory {
    welcomePage(_options?: Configuration): Promise<RequestContext>;
}
export declare class InfoApiResponseProcessor {
    welcomePage(response: ResponseContext): Promise<void>;
}
