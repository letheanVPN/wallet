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

	page = {
		size: 25,
		totalElements: 0,
		totalPages: 0,
		pageNumber: 0
	};

	// @ts-ignore
  private static _blocks: BlockHeader[];
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

  /**
   * @return {BlockHeader[]} blocks
   */
  public get blocks(): BlockHeader[] {
    return BlockLedgerComponent._blocks;
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
		 BlockLedgerComponent._blocks = req['headers'].reverse()

    console.log(BlockLedgerComponent._blocks)
	}


	public ngOnDestroy() {
		this.sub.forEach((s) => s.unsubscribe());
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
