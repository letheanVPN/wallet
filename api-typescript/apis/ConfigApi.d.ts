import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ConfigFileLoadDTO } from '../models/ConfigFileLoadDTO';
import { ConfigFileRenderAndLoadDTO } from '../models/ConfigFileRenderAndLoadDTO';
import { ConfigFileRenderDTO } from '../models/ConfigFileRenderDTO';
import { ConfigFileRenderStringDTO } from '../models/ConfigFileRenderStringDTO';
import { ConfigObjectClearDTO } from '../models/ConfigObjectClearDTO';
import { ConfigObjectCountDTO } from '../models/ConfigObjectCountDTO';
import { ConfigObjectGetDTO } from '../models/ConfigObjectGetDTO';
import { ConfigObjectRemoveDTO } from '../models/ConfigObjectRemoveDTO';
import { ConfigObjectSetDTO } from '../models/ConfigObjectSetDTO';
import { INIObjectParseJSONDTO } from '../models/INIObjectParseJSONDTO';
export declare class ConfigApiRequestFactory extends BaseAPIRequestFactory {
    clearConfig(configObjectClearDTO: ConfigObjectClearDTO, _options?: Configuration): Promise<RequestContext>;
    countConfig(configObjectCountDTO: ConfigObjectCountDTO, _options?: Configuration): Promise<RequestContext>;
    getConfig(configObjectGetDTO: ConfigObjectGetDTO, _options?: Configuration): Promise<RequestContext>;
    load(configFileLoadDTO: ConfigFileLoadDTO, _options?: Configuration): Promise<RequestContext>;
    parse(iNIObjectParseJSONDTO: INIObjectParseJSONDTO, _options?: Configuration): Promise<RequestContext>;
    removeConfig(configObjectRemoveDTO: ConfigObjectRemoveDTO, _options?: Configuration): Promise<RequestContext>;
    render(configFileRenderDTO: ConfigFileRenderDTO, _options?: Configuration): Promise<RequestContext>;
    renderAndLoad(configFileRenderAndLoadDTO: ConfigFileRenderAndLoadDTO, _options?: Configuration): Promise<RequestContext>;
    renderString(configFileRenderStringDTO: ConfigFileRenderStringDTO, _options?: Configuration): Promise<RequestContext>;
    setConfig(configObjectSetDTO: ConfigObjectSetDTO, _options?: Configuration): Promise<RequestContext>;
}
export declare class ConfigApiResponseProcessor {
    clearConfig(response: ResponseContext): Promise<void>;
    countConfig(response: ResponseContext): Promise<void>;
    getConfig(response: ResponseContext): Promise<void>;
    load(response: ResponseContext): Promise<void>;
    parse(response: ResponseContext): Promise<void>;
    removeConfig(response: ResponseContext): Promise<void>;
    render(response: ResponseContext): Promise<void>;
    renderAndLoad(response: ResponseContext): Promise<void>;
    renderString(response: ResponseContext): Promise<void>;
    setConfig(response: ResponseContext): Promise<void>;
}
