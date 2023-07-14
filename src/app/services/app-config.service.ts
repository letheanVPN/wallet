import {Injectable} from '@angular/core';
import {ConfigIniParser} from 'config-ini-parser';
import {FileSystemService} from './filesystem/file-system.service';

@Injectable({
	providedIn: 'root'
})
/**
 * @deprecated
 */
export class AppConfigService {
	public static get config(): { [p: string]: ConfigIniParser } {
		return this._config;
	}

	public static set config(value: { [p: string]: ConfigIniParser }) {
		this._config = value;
	}


	public static apiUrl: string = 'http://localhost:36911';
	public static serverPublicKey: string|undefined;
	private static _config: { [key:string]: ConfigIniParser} = {  };

	public static settings:  any = {};
	openpgp: any;
	crypto: any;
	online: boolean = false

	 constructor(public fs: FileSystemService) {
		try {

			this.loadConfig('app', 'conf/app.ini');
			 this.fetchServerPublicKey()

		} catch (e) {

				this.makeDefault().catch((e) => console.log(e))
			this.loadConfig('conf/app.ini')
				this.saveConfig('app')

			console.log(e);
		}


	}


	/**
	 * Get Server Public Key
	 */
	async fetchServerPublicKey() {
		if(AppConfigService.serverPublicKey === undefined) {
			return await fetch(AppConfigService.apiUrl + '/system/cert')
				.then(response => response.text())
				.then(text => {
					return AppConfigService.serverPublicKey = text;
				}).catch((err) => {
					console.log(err);
					return AppConfigService.serverPublicKey = undefined;
				});
		}
    return undefined
	}

	syncStates(){
		// @todo loop over the states
	}

	/**
	 *
	 * @param {string} key
	 * @param data
	 */
	updateState(key: string = 'app', data?: any){

		if(AppConfigService.settings[key] == undefined){
			AppConfigService.settings[key] = {}
		}

		if(data){
			AppConfigService._config[key] = new ConfigIniParser()
			AppConfigService._config[key].parse(data)
		}

		 AppConfigService._config[key].items().forEach((item: any[]) => {
			 // if the section is not in the state yet, add it
			 AppConfigService.settings[key][item[0]] = item[1]
		});
		AppConfigService._config[key].sections().forEach((section: string) => {
			AppConfigService._config[key].items(section).forEach((item: any[]) => {
				// if the section is not in the state yet, add it
				if(AppConfigService.settings[key][section] == undefined){AppConfigService.settings[key][section] = {};}
				AppConfigService.settings[key][section][item[0]] = item[1]
			});
		})

	}

	loadConfig(key: string = 'app', filename: string = '') {
		if(filename == ''){
			return
		}
		console.log(`Load Config: ${filename}`);

		try{
			this.fs.readFile(filename).then((data: any) => {
				this.updateState(key, data);
			}).catch(async () => {
				await this.makeDefault();
				this.fs.readFile(filename).then((data: any) => {
					this.updateState(key, data);
				})
			})
		}catch (e) {
			console.log(e)
		}


	}

	async makeDefault() {
		const p = new ConfigIniParser('\r\n');
		try {

			p.setOptionInDefaultSection('api_url', 'http://localhost:36911');
			p.setOptionInDefaultSection('lang', 'en');

			p.addSection('daemon');
			p.set('daemon', 'start_on_boot', 'true');


			return await this.fs.writeFile(
				'conf/app.ini',
				p.stringify('\r\n')
			);
		} catch (e) {
			if (e === ConfigIniParser.Errors.ErrorDuplicateSectionError) {
				console.error('Duplicated section');
			}
		}
    return undefined
	}

	/**
	 *
	 * @param {string} section
	 * @param {string} key
	 * @param option
	 * @param value
	 * @param {string} defaultValue
	 * @returns {any}
	 */
	getConfig(key: string, option?: string, section?: string, defaultValue?: any) {

		if(option && section){
			if(!AppConfigService.settings[key][section][option] && defaultValue){
				return defaultValue
			}else{
				return AppConfigService.settings[key][section][option];
			}
		}
		try {
			// @ts-ignore
      return AppConfigService.settings[key][option]

		}catch (e) {
			this.fs.isFile(`conf/${key}.ini`).then((exists:any) => {
				if(exists) {
					this.loadConfig(key, `conf/${key}.ini`);
					// @ts-ignore
          return AppConfigService.settings[key][option]
				}
			})
		}

	}

	/**
	 *
	 * @param {string} section
	 * @param {string} key
	 * @param option
	 * @param {string} value
	 */
	setConfig(key: string, option: string, value: any, section?: string ) {
		if(section){
			AppConfigService._config[key].set(section, option, value);
		}else{
			AppConfigService._config[key].setOptionInDefaultSection(option, value)
		}

		 this.saveConfig(key).then(() => console.log())
	}

	/**
	 * @todo add the application key like `lthn-app-chain`, adjsut the conf path to `conf/${somthing, convert - to /}.ini`
	 *
	 * @returns {Promise<Object>}
	 */
	saveConfig(key: string) {
		return this.fs.writeFile(`conf/${key}.ini`, AppConfigService._config[key].stringify());
	}

	async openLink(link: string) {
		return await fetch(`${AppConfigService.apiUrl }/system/browser/openLink`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({link: link})
		})

			.then(res => res.json())
			.then(res => res.result)

	}

}
