import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { BlockchainLetheanDaemonStartDTO } from '../models/BlockchainLetheanDaemonStartDTO';
import { BlockchainLetheanRPCDTO } from '../models/BlockchainLetheanRPCDTO';
import { BlockchainLetheanWalletStartDTO } from '../models/BlockchainLetheanWalletStartDTO';
export declare class BlockchainApiRequestFactory extends BaseAPIRequestFactory {
    downloadDaemon(body: any, _options?: Configuration): Promise<RequestContext>;
    exportBlockchain(body: any, _options?: Configuration): Promise<RequestContext>;
    importBlockchain(body: any, _options?: Configuration): Promise<RequestContext>;
    jsonRpc(blockchainLetheanRPCDTO: BlockchainLetheanRPCDTO, _options?: Configuration): Promise<RequestContext>;
    startDaemon(blockchainLetheanDaemonStartDTO: BlockchainLetheanDaemonStartDTO, _options?: Configuration): Promise<RequestContext>;
    startWallet(blockchainLetheanWalletStartDTO: BlockchainLetheanWalletStartDTO, _options?: Configuration): Promise<RequestContext>;
    walletJsonRpc(body: any, _options?: Configuration): Promise<RequestContext>;
}
export declare class BlockchainApiResponseProcessor {
    downloadDaemon(response: ResponseContext): Promise<void>;
    exportBlockchain(response: ResponseContext): Promise<void>;
    importBlockchain(response: ResponseContext): Promise<void>;
    jsonRpc(response: ResponseContext): Promise<string>;
    startDaemon(response: ResponseContext): Promise<void>;
    startWallet(response: ResponseContext): Promise<void>;
    walletJsonRpc(response: ResponseContext): Promise<string>;
}
