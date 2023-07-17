import {Component, OnInit} from '@angular/core';
import {BlockchainAPIService} from "../blockchain/blockchain.service";
import {ChainGetInfo} from "../blockchain/interfaces/props/get_info";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public chainInfo: ChainGetInfo|undefined;
  constructor(private chain: BlockchainAPIService) { }

  async ngOnInit(): Promise<void> {
    if (this.chain.chainInfo === undefined) {
     await this.chain.getInfo()
    }
    this.chainInfo = await this.chain.chainInfo;
  }
}
