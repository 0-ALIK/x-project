import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
	selector: 'app-ver-tickets',
	templateUrl: './ver-tickets.component.html',
	styleUrls: ['./ver-tickets.component.css']
})
export class VerTicketsComponent {
	activityValues: number[] = [0, 100];

    selectedProduct!: any;

	constructor(private router: Router) { }

	redirectToAnotherPage(productId: string) {
        //this.router.navigate(['/dashboard/tickets', 12]);
	}

    public onSeleccion( evento: any ): void {
        this.router.navigate(['/dashboard/tickets', evento.data.id]);
    }

	products: object[] = [
		{ id: '#2345', usuario: 'Jose L.', asunto: 'Pedido Tardio', prioridad: 'ALTA', estatus: 'REVISADO', fecha: '29/03/2023' },
		{ id: '#4567', usuario: 'Julian o.', asunto: 'Pedido Tardio', prioridad: 'ALTA', estatus: 'REVISION', fecha: '25/03/2023' },
		{ id: '#4576', usuario: 'Moises h.', asunto: 'Pedido Tardio', prioridad: 'BAJA', estatus: 'REVISION', fecha: '22/03/2023' },
		{ id: '#4532', usuario: 'Penelope p.', asunto: 'Pedido Tardio', prioridad: 'MEDIA', estatus: 'REVISION', fecha: '20/03/2023' },
		{ id: '#1297', usuario: 'Miguel e.', asunto: 'Pedido Tardio', prioridad: 'BAJA', estatus: 'REVISION', fecha: '2/03/2023' },
	];

	clear(table: Table) {
		table.clear();
	}

	getPriority(prioridad: string): string {
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
	getSeverity(estatus: string): string {
		switch (estatus) {
			case 'REVISADO':
				return 'success';
			case 'LOWSTOCK':
				return 'warning';
			case 'OUTOFSTOCK':
				return 'danger';
			default:
				return 'unknown';
		}
	}

}
