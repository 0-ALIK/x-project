import { Injectable } from '@angular/core';

@Injectable()
export class TagsColorsService {

    public getPriority(prioridad: string): string {
		switch (prioridad) {
			case 'BAJA':
				return 'success';
			case 'MEDIA':
				return 'warning';
			case 'ALTA':
				return 'danger';
			default:
				return 'unknown';
		}
	}

	public getSeverity(estatus: string): string {
		switch (estatus) {
			case 'Cerrado':
				return 'success';
			case 'Abierto':
				return 'warning';
			case 'Pendiente':
				return 'danger';
			default:
				return 'unknown';
		}
	}

}
