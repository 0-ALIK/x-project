import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { reclamos } from 'src/app/interfaces/data';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { TagsColorsService } from '../../services/tags-colors.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { VerReportesTicketsComponent  } from 'src/app/modules/analitica/pages/ver-reportes-tickets/ver-reportes-tickets.component';

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
        this.ref = this.dialogService.open(VerReportesTicketsComponent, { header: 'Generar Reporte' });
    }

    public onSeleccion( evento: any ): void {
        this.router.navigate(['/app/tickets', evento.data.id_reclamo]);
    }

}
