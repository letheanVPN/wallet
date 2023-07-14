import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AddAddressBook, Address, Balance, CreateWallet, GetAddressBookOut, GetBulkPaymentsIn, GetBulkPaymentsOut, GetPaymentsIn, GetPaymentsOut, GetTransfersIn, GetTransfersOut, Height, IncomingTransfersIn, IncomingTransfersOut, IntegratedAddress, MakeIntegratedAddressIn, MakeUriIn, OpenWallet, QueryKeyIn, QueryKeyOut, SplitIntegratedAddressOut, StoreOut, SweepAllIn, SweepAllOut, Transfer, TransferIn, TransferOut, TransferSplitIn, TransferSplitOut, Uri} from '../blockchain/wallet/interfaces';
import {RestoreWallet} from '../blockchain/wallet/interfaces';
import {BlockchainAPIService} from "../blockchain/blockchain.service";
import {rpcBody} from "./json-rpc";


@Injectable({
	providedIn: 'root'
})
export class WalletRpcService {
	// @todo conf class is annoying me atm fix this later
	private url =  'http://localhost:36911/blockchain/lethean/wallet/json_rpc'

	constructor(private http: HttpClient, private chain: BlockchainAPIService) {}

	/**
	 * Send Wallet Service start POST req
	 *
	 */
	startWalletService() {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};

		return this.http
			.post<any>(
				`http://localhost:36911/blockchain/lethean/wallet/start`,
        {walletDir:'wallets', rpcBindPort: '36963', disableRpcLogin: false},
				options
			);
	}

	/**
	 * Get opened wallet balance
	 *
	 * @returns {Promise<Balance>}
	 */
	getBalance(): Promise<Balance> {
		return this.chain.walletRpc({ "method": 'getbalance'})
	}

	/**
	 * Get the address of the opened wallet
	 *
	 * @returns {Promise<Address>}
	 */
	getAddress(): Promise<Address> {
		return this.chain.walletRpc({ "method": 'getaddress'})
	}

	/**
	 * Get chain height
	 *
	 * @returns {Promise<Height>}
	 */
	getHeight(): Promise<Height> {
		return this.chain.walletRpc({ "method": 'getheight'})
	}

	/**
	 * Send a transaction
	 *
	 * @param {TransferIn} x
	 * @returns {Promise<TransferOut>}
	 */
	transfer(x: TransferIn): Promise<TransferOut> {
		return this.chain.walletRpc({ "method": 'transfer', "params": x})
	}

	/**
	 *
	 * @param {TransferSplitIn} x
	 * @returns {Promise<TransferSplitOut>}
	 */
	transferSplit(x: TransferSplitIn): Promise<TransferSplitOut> {
		return this.chain.walletRpc({ "method": 'transfer_split', "params": x})
	}

	/**
	 *
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	sweepDust() {
		return this.chain.walletRpc({ "method": 'sweep_dust'})
	}

	/**
	 * Send all funds
	 * @param {SweepAllIn} x
	 * @returns {Promise<SweepAllOut>}
	 */
	sweepAll(x: SweepAllIn): Promise<SweepAllOut> {
		return this.chain.walletRpc({ "method": 'sweep_all', "params": x})
	}

	/**
	 *
	 * @returns {Promise<StoreOut>}
	 */
	store(): Promise<StoreOut> {
		return this.chain.walletRpc({ "method": 'store'})
	}

	/**
	 *
	 * @param {GetPaymentsIn} x
	 * @returns {Promise<GetPaymentsOut>}
	 */
	getPayments(x: GetPaymentsIn): Promise<GetPaymentsOut> {
		return this.chain.walletRpc({ "method": 'get_payments'})
	}

	/**
	 *
	 * @param {GetBulkPaymentsIn} x
	 * @returns {Promise<GetBulkPaymentsOut>}
	 */
	getBulkPayments(x: GetBulkPaymentsIn): Promise<GetBulkPaymentsOut> {
		return this.chain.walletRpc({ "method": 'get_bulk_payments', "params": x})
	}

	/**
	 *
	 * @param {GetTransfersIn} x
	 * @returns {Promise<GetTransfersOut>}
	 */
	getTransfers(x: GetTransfersIn): Promise<GetTransfersOut[]> {
		return this.chain.walletRpc({ "method": 'get_transfers', "params": x})
	}

	/**
	 * Get transfer by Transactin ID
	 *
	 * @param {{txid: string}} x
	 * @returns {Promise<Transfer>}
	 */
	getTransferByTxid(x: { txid: string }): Promise<Transfer> {
		return this.chain.walletRpc({ "method": 'get_transfer_by_txid', "params": x})
	}

	/**
	 *
	 * @param {IncomingTransfersIn} x
	 * @returns {Promise<IncomingTransfersOut>}
	 */
	incomingTransfers(
		x: IncomingTransfersIn
	): Promise<IncomingTransfersOut> {
		return this.chain.walletRpc({ "method": 'incoming_transfers', "params": x})
	}

	/**
	 *
	 * @param {QueryKeyIn} x
	 * @returns {Promise<QueryKeyOut>}
	 */
	queryKey(x: QueryKeyIn): Promise<QueryKeyOut> {
		return this.chain.walletRpc({ "method": 'query_key', "params": x})
	}

	/**
	 *
	 * @param {MakeIntegratedAddressIn} x
	 * @returns {Promise<IntegratedAddress>}
	 */
	makeIntegratedAddress(
		x: MakeIntegratedAddressIn
	): Promise<IntegratedAddress> {
		return this.chain.walletRpc({ "method": 'make_integrated_address', "params": x})
	}

	/**
	 *
	 * @param {IntegratedAddress} x
	 * @returns {Promise<SplitIntegratedAddressOut>}
	 */
	splitIntegratedAddress(
		x: IntegratedAddress
	): Promise<SplitIntegratedAddressOut> {
		return this.chain.walletRpc({ "method": 'split_integrated_address', "params": x})
	}

	/**
	 *
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	stopWallet() {
		return this.chain.walletRpc({ "method": 'stop_wallet'})
	}

	/**
	 *
	 * @param {MakeUriIn} x
	 * @returns {Promise<Uri>}
	 */
	makeUri(x: MakeUriIn): Promise<Uri> {
		return this.chain.walletRpc({ "method": 'make_uri', "params": x})
	}

	/**
	 *
	 * @param {Uri} x
	 * @returns {Promise<MakeUriIn>}
	 */
	parseUri(x: Uri): Promise<MakeUriIn> {
		return this.chain.walletRpc({ "method": 'parse_uri', "params": x})
	}

	/**
	 *
	 * @param {{entries: number[]}} x
	 * @returns {Promise<GetAddressBookOut>}
	 */
	getAddressBook(x: { entries: number[] }): Promise<GetAddressBookOut> {
		return this.chain.walletRpc({ "method": 'get_address_book', "params": x})
	}


	/**
	 *
	 * @param {{index: number}} x
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	deleteAddressBook(x: { index: number }) {
		return this.chain.walletRpc({ "method": 'delete_address_book', "params": x})
	}

	/**
	 *
	 * @param {OpenWallet} x
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	openWallet(x: OpenWallet) {
		return this.chain.walletRpc({ "method": 'open_wallet', "params": x});
	}

	/**
	 *
	 * @param {CreateWallet} x
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	createWallet(x: CreateWallet) {
		return this.chain.walletRpc({ "method": 'create_wallet', "params": x})
	}

	/**
	 *
	 * @param {RestoreWallet} x
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	restoreWallet(x: RestoreWallet) {
		return this.chain.walletRpc({ "method": 'generate_from_keys', "params": x})
	}

}
