import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class AppsApiRequestFactory extends BaseAPIRequestFactory {
    getMarketPlaceApps(_options?: Configuration): Promise<RequestContext>;
    installApp(_options?: Configuration): Promise<RequestContext>;
    listApps(_options?: Configuration): Promise<RequestContext>;
    removeApp(_options?: Configuration): Promise<RequestContext>;
}
export declare class AppsApiResponseProcessor {
    getMarketPlaceApps(response: ResponseContext): Promise<string>;
    installApp(response: ResponseContext): Promise<any>;
    listApps(response: ResponseContext): Promise<string>;
    removeApp(response: ResponseContext): Promise<any>;
}
