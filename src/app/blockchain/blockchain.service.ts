import {Injectable} from '@angular/core';
import {rpcBody} from '../services/json-rpc';
import {ChainGetInfo} from "./interfaces/props/get_info";
import {
  BlockchainApi, createConfiguration,
  BlockchainLetheanRPCDTO, BlockchainLetheanDaemonStartDTO
} from "../../../api-typescript";

@Injectable({
    providedIn: 'root'
})
export class BlockchainAPIService {
  get chainInfo(): ChainGetInfo | undefined {
    return BlockchainAPIService._chainInfo;
  }

  set chainInfo(value: ChainGetInfo | undefined) {
    BlockchainAPIService._chainInfo = value;
  }
  private static _chainInfo: ChainGetInfo|undefined = undefined;
  private chain: BlockchainApi;
    constructor() {
      this.chain = new BlockchainApi(createConfiguration())
      this.getInfo().catch(e => console.log(e))
    }

  async walletRpc(params: any) {
    try {
      let request = {
        "url": params['url'],
        "req": JSON.stringify(rpcBody(params['method'])(params['params']))
      } as BlockchainLetheanRPCDTO
      return JSON.parse(await this.chain.walletJsonRpc(request)).result
    } catch (e) {
      console.log(e)
      return false
    }
  }

  startWalletService() {
      this.chain.startWallet({walletDir:'wallets', rpcBindPort: 36963, disableRpcLogin: false});
  }

    async chainRpc(params: any, isRetry: boolean = false): Promise<any> {
        try {
            let request = {
                "url": params['url'],
                "req": JSON.stringify(rpcBody(params['method'])(params['params']))
            } as BlockchainLetheanRPCDTO
                 return JSON.parse(await this.chain.jsonRpc(request)).result
        } catch (e: any) {
          if(e.code === 500 && !isRetry) {
            await this.chain.startDaemon({
              configFile: 'letheand.conf',
              dataDir: 'data/lthn',
              logDir: 'logs/lthn'
            } as BlockchainLetheanDaemonStartDTO)
            return await this.chainRpc(params, true)
          }
        }
    }

    async getInfo() {
        // @ts-ignore
      return this.chainInfo = await this.chainRpc({ "method": 'get_info'})
    }

    async getTransactions(txsHashes: string[]) {

        return await this.chainRpc({"method": 'gettransactions', "params": {txs_hashes: txsHashes}});
    }


    async getBlock(block_id: string) {

        return await this.chainRpc({"method": "getblock", "params": {hash: block_id}})
    }

    async getBlocks(start_height: number, end_height: number) {

        return await this.chainRpc({"method": 'getblockheadersrange', "params": {
            start_height: start_height,
            end_height: end_height
        }})
    }
}
