import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { reclamos } from 'src/app/interfaces/data';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { TagsColorsService } from '../../services/tags-colors.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReporteTicketsComponent } from 'src/app/modules/analitica/components/reporte-tickets.component';

import { ReclamosService } from '../../services/tickets.service';

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
        public tagsColorsService: TagsColorsService,

        private reclamosService: ReclamosService
    ) { }
    ngOnInit() {
        this.reclamosService.getReclamos().subscribe(
            data => {
                this.reclamos = data.data;
				console.log('Datos recibidos:', data); 
				 
            },
            error => {
                console.error('Error al obtener los reclamos', error);
            }
        );
    }

    public showGenerarReporte(): void {
        this.ref = this.dialogService.open(ReporteTicketsComponent, { header: 'Generar Reporte' });
    }

    public onSeleccion( evento: any ): void {
        this.router.navigate(['/app/tickets', evento.data.id_reclamo]);
    }

}
