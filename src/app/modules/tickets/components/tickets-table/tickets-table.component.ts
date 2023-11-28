import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { reclamos } from 'src/app/interfaces/data';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { TagsColorsService } from '../../services/tags-colors.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReporteTicketsComponent } from 'src/app/modules/analitica/components/reporte-tickets.component';

@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.css']
})
export class TicketsTableComponent {

    public activityValues: number[] = [0, 100];

    public selectedProduct!: any;

    public reclamos: Reclamo[] = reclamos;

    public ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        private router: Router,
        public tagsColorsService: TagsColorsService
    ) { }

    public showGenerarReporte(): void {
        this.ref = this.dialogService.open(ReporteTicketsComponent, { header: 'Generar Reporte' });
    }

	products: object[] = [
		{ id: '#2345', usuario: 'Jose L.', asunto: 'Pedido Tardio', prioridad: 'ALTA', estatus: 'REVISADO', fecha: '29/03/2023' },
		{ id: '#4567', usuario: 'Julian o.', asunto: 'Pedido Tardio', prioridad: 'ALTA', estatus: 'ESPERA', fecha: '25/03/2023' },
		{ id: '#4576', usuario: 'Moises h.', asunto: 'Pedido Tardio', prioridad: 'BAJA', estatus: 'RESUELTO', fecha: '22/03/2023' },
		{ id: '#4532', usuario: 'Penelope p.', asunto: 'Pedido Tardio', prioridad: 'MEDIA', estatus: 'ESPERA', fecha: '20/03/2023' },
		{ id: '#1297', usuario: 'Miguel e.', asunto: 'Pedido Tardio', prioridad: 'BAJA', estatus: 'REVISADO', fecha: '2/03/2023' },
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
			return 'info';
		  case 'ESPERA':
			return 'warning';
		  case 'RESUELTO':
			return 'success';
		  default:
			return 'unknown';
		}
	  }
	  
    public onSeleccion( evento: any ): void {
        this.router.navigate(['/app/tickets', evento.data.id_reclamo]);
    }

}
