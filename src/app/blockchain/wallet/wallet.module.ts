import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './wallet.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {PipesModule} from '../../pipes';
import {RouterLink, RouterModule} from '@angular/router';
import {WalletNewComponent} from './components/wallet-new.component';
import {TransactionsComponent} from './components/transactions.component';
import {SettingsComponent} from './components/settings.component';
import {RestoreComponent} from './components/restore.component';
import {DetailsComponent} from './components/details.component';
import {AddComponent} from './components/add.component';
import {OpenComponent} from './components/open.component';
import {TransferComponent} from './components/transfer/transfer.component';
import {WalletRoutingModule} from "./wallet-routing.module";


@NgModule({
  declarations: [
    WalletComponent,
    DetailsComponent,
    WalletNewComponent,
    TransactionsComponent,
    SettingsComponent,
    RestoreComponent,
    AddComponent,
    OpenComponent,
    TransferComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    PipesModule,
    FormsModule,
    WalletRoutingModule,
    RouterLink
  ]
})
export class WalletModule {
}
