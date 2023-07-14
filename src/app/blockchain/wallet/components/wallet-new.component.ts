import {Component, OnInit} from '@angular/core';

import {UntypedFormControl} from '@angular/forms';
import {WalletRpcService} from '../../../services/wallet.rpc.service';

import {nameNotTakenValidator} from '../validators';
import {WalletService} from '../wallet.service';
import {Router} from '@angular/router';

@Component({
	selector: 'lthn-wallet-new',
	templateUrl: './wallet-new.component.html'
})
export class WalletNewComponent implements OnInit {
	wallet_name: UntypedFormControl = new UntypedFormControl;
	password: UntypedFormControl = new UntypedFormControl;
	password_confirm: UntypedFormControl = new UntypedFormControl;
	constructor(private walletRpc: WalletRpcService, private wallet: WalletService, private router: Router) {}

	ngOnInit(): void {
		this.wallet_name = new UntypedFormControl('', [nameNotTakenValidator(this.wallet.walletList())]);
		this.password = new UntypedFormControl('')
		this.password_confirm = new UntypedFormControl('')
	}

	createWallet() {
		if ((this.password && this.password_confirm && this.wallet_name) && this.password.value === this.password_confirm.value) {

				this.walletRpc.createWallet({
					filename: this.wallet_name.value,
					password: this.password.value,
					language: 'English'
				}).then((data:any) => {
					if(data.status === 200){
						this.router.navigate(['/', 'wallet']).catch(console.error)
					}
				})

		}
	}
}
