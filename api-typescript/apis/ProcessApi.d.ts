import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ProcessAddDTO } from '../models/ProcessAddDTO';
import { ProcessKillDTO } from '../models/ProcessKillDTO';
import { ProcessRunDTO } from '../models/ProcessRunDTO';
import { ProcessStartDTO } from '../models/ProcessStartDTO';
import { ProcessStopDTO } from '../models/ProcessStopDTO';
export declare class ProcessApiRequestFactory extends BaseAPIRequestFactory {
    addProcess(processAddDTO: ProcessAddDTO, _options?: Configuration): Promise<RequestContext>;
    killProcess(processKillDTO: ProcessKillDTO, _options?: Configuration): Promise<RequestContext>;
    runProcess(processRunDTO: ProcessRunDTO, _options?: Configuration): Promise<RequestContext>;
    startProcess(processStartDTO: ProcessStartDTO, _options?: Configuration): Promise<RequestContext>;
    stopProcess(processStopDTO: ProcessStopDTO, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProcessApiResponseProcessor {
    addProcess(response: ResponseContext): Promise<void>;
    killProcess(response: ResponseContext): Promise<void>;
    runProcess(response: ResponseContext): Promise<void>;
    startProcess(response: ResponseContext): Promise<void>;
    stopProcess(response: ResponseContext): Promise<void>;
}
