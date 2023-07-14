import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'shrug', pure: false })
export class ShruggiePipe implements PipeTransform {
	transform(content: any) {
		if (content === null || content === '') {
			return '¯\\_(ツ)_/¯';
		}
		return content;
	}
}
