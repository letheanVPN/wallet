import {Component, OnInit} from '@angular/core';
// import {BlockchainService} from '../blockchain.service';
import {FileSystemService} from '../../services/filesystem/file-system.service';
import {BlockchainApi} from "@lethean/api-typescript";
// import 'codemirror/mode/properties/properties.js';
@Component({
	selector: 'lthn-chain-config',
	templateUrl: './config.component.html'
})
export class BlockchainConfigComponent implements OnInit {

	public config: string|null = ''

	constructor(public chain: BlockchainApi, private fs: FileSystemService) {

	}

	async ngOnInit() {
		this.load();
	}

	async save() {
		await this.fs.writeFile('conf/lthn/letheand.conf', this.config)
		// this.notify.create({
		// 	type: NotificationType.html,
		// 	styleType: NotificationStyleType.success,
		// 	title: 'Saved Config File'
		// })
	}

	async load() {
		this.config = await this.fs.readFile('conf/lthn/letheand.conf')
	}

}
