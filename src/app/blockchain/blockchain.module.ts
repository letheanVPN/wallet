import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockchainComponent} from './blockchain.component';
import {TranslateModule} from '@ngx-translate/core';
import {HashRatePipe, PipesModule} from '../pipes';
import {MomentModule} from 'ngx-moment';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BlockDetailsComponent} from './components/block/details.component';
import {BlockLedgerComponent} from './components/block/ledger.component';
import {BlockchainConfigComponent} from './components/config.component';
import {BlockTransactionsComponent} from './components/block/transactions.component';
import {StatusComponent} from './components/status/status.component';
import {BlockchainStartComponent} from './components/start/start.component';
import {BlockchainRoutingModule} from "./blockchain-routing.module";
import {WalletRoutingModule} from "./wallet/wallet-routing.module";
import {WalletModule} from "./wallet/wallet.module";

@NgModule({
  declarations: [BlockchainComponent,
    BlockDetailsComponent, BlockLedgerComponent, BlockchainConfigComponent,
    BlockTransactionsComponent, StatusComponent, BlockchainStartComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MomentModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    BlockchainRoutingModule,
    WalletRoutingModule,
    TranslateModule,
      WalletModule
  ],
  exports: [BlockchainComponent, StatusComponent],
  providers: [HashRatePipe]
})
export class BlockchainModule {
}
