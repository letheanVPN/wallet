import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ChainGetInfo} from '../../interfaces/props/get_info';
import {interval, Subscription} from 'rxjs';
import {BlockHeader} from '../../interfaces/types/blockHeader';
// import {BlockchainService} from '../../blockchain.service';
import {UntypedFormControl, Validators} from '@angular/forms';
import {BlockchainApi, createConfiguration} from "@lethean/api-typescript";
import {BlockchainAPIService} from "../../blockchain.service";
@Component({
	selector: 'lthn-chain-ledger',
	templateUrl: './ledger.component.html'
})
export class BlockLedgerComponent implements OnInit, OnDestroy {

	columns: any = [];

	page = {
		size: 25,
		totalElements: 0,
		totalPages: 0,
		pageNumber: 0
	};

	allColumns = [
		{prop: 'height', name: 'app.lthn.chain.words.height', default: true},
		{prop: 'difficulty', name: 'app.lthn.chain.words.difficulty', default: true},
		{prop: 'hash', name: 'app.lthn.chain.words.hash', default: true},
		{prop: 'orphan_status', name: 'app.lthn.chain.words.orphan_status', default: true},
		//{ prop: 'reward', name: 'app.lthn.chain.table.th.reward', default: true },
		{prop: 'timestamp', name: 'app.lthn.chain.words.timestamp', default: true},
		//	{ prop: 'block_size', name: 'Block Size', default: true },
		//{ prop: 'depth', name: 'app.lthn.chain.table.th.depth', default: true },
		//{ prop: 'major_version', name: 'Block Major Version', default: true },
		//	{ prop: 'minor_version', name: 'Block Minor Version', default: false },
		//	{ prop: 'nonce', name: 'Block Nonce', default: false },
			{ prop: 'num_txes', name: 'app.lthn.chain.words.tx_count', default: true },
		//	{ prop: 'prev_hash', name: 'Last Hash', default: true },
	];
	// ColumnMode = ColumnMode;
	// @ts-ignore
  blocks: BlockHeader[];
	chainInfo: ChainGetInfo|undefined;
	@ViewChild('blocksTable') table: any;
	@ViewChild('editTmpl', { static: false }) editTmpl: TemplateRef<any>|undefined;
	private sub: Subscription[] = [];

	status_daemon: number = 0;
	blockSearch: UntypedFormControl|undefined;

	constructor(
      private chain: BlockchainAPIService
  ) {

	}

	async ngOnInit() {
		this.blockSearch = new UntypedFormControl('', [Validators.required]);

		//this.chain.getInfo()
		await this.getChainInfo()

		if(this.chainInfo){
			await this.getBlocks()
		}

		// @ts-ignore
    this.sub['interval'] = interval(5000).subscribe(async () => {
			await this.getChainInfo()
			await this.getBlocks()
		});

	}

	async getChainInfo() {
		const chainInfo = await this.chain.getInfo()

		if (chainInfo) {
			// if the chain data has changed
      if(chainInfo != this.chainInfo){
        this.chainInfo = chainInfo
      }
			// we have chain data, and it talks to us set to amber
			this.status_daemon = 1;
			//console.log(data)
			// if chain height + 4 to give 2~ blocks to be considered healthy
			if (this.chainInfo && this.chainInfo.height + 4 > this.chainInfo.target_height) {
				this.status_daemon = 2;
			}
			this.page.totalElements = this.chainInfo ? this.chainInfo.height : 0
			this.page.totalPages = Math.floor(this.page.totalElements/this.page.size)

		} else {
			this.status_daemon = 0;
		}
	}

	async getBlocks() {
		let start_height = this.page.totalElements - this.page.pageNumber * this.page.size - 1
		let end_height = this.page.totalElements - this.page.size - this.page.pageNumber * this.page.size

		 const req = await this.chain.getBlocks(Math.max(0, end_height), Math.max(0, start_height));
		 this.blocks = req['headers'].reverse()

    console.log(this.blocks)
	}


	public ngOnDestroy() {
		this.sub.forEach((s) => s.unsubscribe());
	}


	toggleExpandRow(row: any) {
		console.log('Toggled Expand Row!', row);
		this.table.rowDetail.toggleExpandRow(row);
	}

	onDetailToggle(event: any) {
		console.log('Detail Toggled', event);
	}


	step = 0;

	setStep(index: number) {
		this.step = index;
	}

	nextStep() {
		this.step++;
	}

	prevStep() {
		this.step--;
	}

	async nextPage() {

		this.page.pageNumber = this.page.pageNumber + 1

		return await this.getBlocks()
	}

	async numPage(num: number) {

		this.page.pageNumber = num

		return await this.getBlocks()
	}

	async prevPage() {
		this.page.pageNumber = this.page.pageNumber - 1

		return await this.getBlocks()
	}

}
