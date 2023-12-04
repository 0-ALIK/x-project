import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { TagsColorsService } from '../../services/tags-colors.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TicketsService } from 'src/app/services/tickets.service';
import { ReclamosService } from '../../services/tickets.service';
import { GenerarReportesTicketsComponent  } from 'src/app/modules/analitica/components/generar-reportes-tickets/generar-reportes-tickets.component';

@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.css']
})
export class TicketsTableComponent {

    public activityValues: number[] = [0, 100];

    public selectedProduct!: any;

    public reclamos: Reclamo[] = [];

    public ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        private router: Router,
        public tagsColorsService: TagsColorsService,
        private ticketsService: TicketsService,
        private reclamosService: ReclamosService
    ) { }
    ngOnInit(): void {
        this.reclamosService.getReclamos().subscribe(
          data => {
            this.reclamos = data.data.map((r: any) => {
                r.cliente.nombre = r.cliente.usuario.nombre;
                r.cliente.foto = r.cliente.usuario.foto;
                return r;
            });
            console.log('Datos recibidos:', data);
          },
          error => {
            console.error('Error al obtener los reclamos', error);
          }
        );

      }



    public showGenerarReporte(): void {
        this.ref = this.dialogService.open(GenerarReportesTicketsComponent, { header: 'Generar Reporte' });
    }

    public onSeleccion( evento: any ): void {
        this.router.navigate(['/app/tickets', evento.data.id_reclamo]);
    }


    //funciones
    getPriorityInfo(prioridad: number): { nombre: string, color: string } {
        switch (prioridad) {
          case 1:
            return { nombre: 'Baja', color: 'success' };
          case 2:
            return { nombre: 'Media', color: 'warning' };
          case 3:
            return { nombre: 'Alta', color: 'danger' };
          default:
            return { nombre: 'Desconocida', color: 'unknown' };
        }
      }
      getEstadoInfo(estado: number): { nombre: string, color: string } {
        switch (estado) {
          case 1:
            return { nombre: 'Espera', color: 'primary' };
          case 2:
            return { nombre: 'Revisado', color: 'info' };
          case 3:
            return { nombre: 'Resuelto', color: 'success' };
          default:
            return { nombre: 'Desconocido', color: 'unknown' };
        }
      }
      getCategoriaInfo(categoria: string): { nombre: string, color: string } {
        switch (categoria) {
          case 'retraso':
            return { nombre: 'Retraso', color: 'danger' };
          case 'equivocado':
            return { nombre: 'Equivocado', color: 'warning' };
          case 'dañado':
            return { nombre: 'Dañado', color: 'info' };
          case 'devolución':
            return { nombre: 'Devolución', color: 'primary' };
          default:
            return { nombre: 'Otro', color: 'default' };
        }
      }
}
