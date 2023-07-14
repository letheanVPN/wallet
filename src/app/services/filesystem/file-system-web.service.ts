import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileSystemInterface} from './file-system.interface';
@Injectable({
	providedIn: 'any'
})
export class FileSystemWebService implements FileSystemInterface {

	public apiUrl: string = 'http://localhost:36911/io/filesystem';


	constructor(private http: HttpClient) {
	}

	public exists(pathname: string): boolean {
		return pathname.length > 1; //@todo replace all this with the server sdk
	}

	public async list(dirname: string) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		return await this.http
			.post<any>(`${this.apiUrl}/list`, {path: dirname}, options)
			.toPromise()
			.then((dat) => JSON.parse(dat));
	}

	public async listDetailed(dirname: string) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		return await this.http
			.post<any>(`${this.apiUrl}/list-detailed`, {path: dirname}, options)
			.toPromise()
			.then((dat) => JSON.parse(dat));
	}

	public mkdir(dirname: string): void {
		console.log(dirname)
	}

	public path(filename: string) {
		return filename
	}


	public async read(filename: string = '') {

		if(!filename || filename === '') {
			return null;
		}

		const options = {
			headers: new HttpHeaders({
				'accept': '*/*',
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		console.log(`${this.apiUrl}/read`, {path: filename}, options)
		return await this.http
			.post<any>(`${this.apiUrl}/read`, {path: filename}, options)
			.toPromise()
			.then((dat) =>  atob(dat));
	}

	public async write(filename: string, data: any) {

		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};

		return await this.http
			.post(
				`${this.apiUrl}/write`,
				{path: filename, data: btoa(data)},
				options
			)
			.toPromise();
	}

	public async isFile(filename: string) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		return await this.http
			.post<any>(`${this.apiUrl}/is-file`, {path: filename}, options)
			.toPromise()
			.then((dat) => JSON.parse(dat))
			.then((dat) => dat.result);
	}

	public async isDir(filename: string) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		return await this.http
			.post<any>(`${this.apiUrl}/is-dir`, {path: filename}, options)
			.toPromise()
			.then((dat) => JSON.parse(dat))
			.then((dat) => dat.result);
	}


}
