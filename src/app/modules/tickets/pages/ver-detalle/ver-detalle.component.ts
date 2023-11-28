import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clientes, pedidos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { ReclamoPrioridad } from 'src/app/interfaces/raclamo.interface';
import { Cliente } from 'src/app/interfaces/usuario.inteface';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css'],
})

export class VerDetalleComponent implements OnInit {

    public cliente: Cliente = clientes[0];

    uploadedFiles: any[] = [];

    ticketNumber: number = 12391;

    public pedido: Pedido = pedidos[0];

    reclamoPrioridad: ReclamoPrioridad[]  | undefined

    loading: boolean = false;

    public items!: any[];

    public constructor(
        private activatedRoute: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this.items = [
            { label: 'Cerrar Ticket', command: () => this.closeTicket() },
            { label: 'Cambiar Status', command: () => this.changeStatus() }
        ];
        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.ticketNumber = id;
            }
        });

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

    public cargarBoton(): void{
        this.loading = true;
        setTimeout(() => {
            this.loading = false
        }, 2000);
    }

}
