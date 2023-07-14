import {Destination} from './types/destination';
import {MakeUriIn} from './dto/makeUriIn';
// import Random from 'random-js';
//
// export const generatePaymentId = (length: 16 | 64) =>
// 	Random.hex(false)(Random.nativeMath, length);
//


export interface TransferSplitIn {
	destinations: Destination[];
	fee?: number; // - unsigned int; Ignored, will be automatically calculated.
	mixin: number; // - unsigned int; Number of outpouts from the blockchain to mix with (0 means no mixing).
	unlock_time: number; // - unsigned int; Number of blocks before the monero can be spent (0 to not add a lock).
	payment_id?: string; // - string; (Optional) Random 32-byte/64-character hex string to identify a transaction.
	get_tx_key?: boolean; // - boolean; (Optional) Return the transaction key after sending. – Ignored
	new_algorithm?: boolean; // - boolean; True to use the new transaction construction algorithm, defaults to false.
}

export interface ParseUri {
	uri: MakeUriIn;
}

export interface OpenWallet {
	filename: string;
	password: string;
}

export interface CreateWallet {
	filename: string;
	password: string;
	language: string; // Language for your wallets' seed.
}

