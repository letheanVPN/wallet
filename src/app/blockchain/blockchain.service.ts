import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {rpcBody} from '../services/json-rpc';
import {ChainGetInfo} from "./interfaces/props/get_info";
import {BlockchainApi, createConfiguration} from "@lethean/api-typescript";
import {
  BlockchainLetheanRPCDTO
} from "../../../../server/docs/sdk/client/typescript/dist/models/BlockchainLetheanRPCDTO";

@Injectable({
    providedIn: 'root'
})
export class BlockchainAPIService {
    public chainInfo: ChainGetInfo|undefined = undefined;
  private chain: BlockchainApi;
    constructor() {
      this.chain = new BlockchainApi(createConfiguration())
    }

  async walletRpc(params: any) {
    try {
      let request = {
        "url": params['url'],
        "req": JSON.stringify(rpcBody(params['method'])(params['params']))
      } as BlockchainLetheanRPCDTO
      return JSON.parse(await this.chain.walletJsonRpc(request)).result
    } catch (e) {
      return false
    }
  }

  startWalletService() {
      // this.chain.startWallet({walletDir:'wallets', rpcBindPort: '36963', disableRpcLogin: false});
  }

    async chainRpc(params: any) {
        try {
            let request = {
                "url": params['url'],
                "req": JSON.stringify(rpcBody(params['method'])(params['params']))
            } as BlockchainLetheanRPCDTO
                 return JSON.parse(await this.chain.jsonRpc(request)).result
        } catch (e) {
            return false
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
