import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BannerComponent} from "./banner/banner.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {BlockchainComponent} from "./blockchain/blockchain.component";
import {AppComponent} from "./app.component";
import {BlockchainModule} from "./blockchain/blockchain.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BlockchainStartComponent} from "./blockchain/components/start/start.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BlockchainAPIService} from "./blockchain/blockchain.service";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
const routes: Routes = [
  { path: '', component: BlockchainComponent },
  { path: 'chain/start', component: BlockchainStartComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes, {useHash: true}),
    BlockchainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
