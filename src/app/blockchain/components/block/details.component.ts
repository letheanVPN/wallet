import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BlockHeader} from '../../interfaces/types/blockHeader';
import {ActivatedRoute} from "@angular/router";
import {BlockchainAPIService} from "../../blockchain.service";

@Component({
	selector: 'lthn-chain-block-details',
	templateUrl: './details.component.html'
})
export class BlockDetailsComponent implements OnInit, OnDestroy {

	blockID: string|undefined;
	sub: Subscription|undefined;
	block: BlockHeader|undefined;
	blockData: any;
	@Input() id: string = '';


	constructor(private chain: BlockchainAPIService, private route: ActivatedRoute) {
	}

	async ngOnInit() {

		const id = this.route.snapshot.paramMap.get('id')
    if(id){
      this.id = id
    }
		if (this.id && this.id.length > 0) {
			const data = await this.chain.getBlock(this.id);
      console.log(data)
			this.block = data['block_header'];
			this.blockData = JSON.parse(data['json']);
console.log(this.blockData)
		}

	}


	ngOnDestroy(): void {
		if(this.sub) this.sub.unsubscribe();
	}

}
