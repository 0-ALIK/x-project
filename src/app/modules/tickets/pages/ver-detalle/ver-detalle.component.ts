import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { clientes, pedidos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { ReclamosService } from '../../services/tickets.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/interfaces/usuario.inteface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

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

    loading: boolean = false;

    public items!: any[];

    public activityValues: number[] = [0, 100];

    public selectedProduct!: any;

    public reclamo: any;

    public ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private reclamosService: ReclamosService,
        private clientesService: ClientesService,
    ) { }
    ngOnInit(): void {
        this.reclamosService.getReclamos().subscribe(
          data => {
            this.reclamo = data.data;
            console.log('Datos recibidos:', data);
          },
          error => {
            console.error('Error al obtener los reclamos', error);
          }
        );

        this.items = [
            { label: 'Cerrar Ticket', command: () => this.closeTicket() },
            { label: 'Cambiar Status', command: () => this.changeStatus() }
        ];
        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.ticketNumber = id;
                console.log('ID del ticket:', this.ticketNumber);

                this.reclamosService.getReclamoById(this.ticketNumber).subscribe(
                  (data) => {
                    this.reclamo = data.data; // Ajusta según la estructura de tu respuesta
                    console.log('Detalles del ticket:', this.reclamo);
                  },
                  (error) => {
                    console.error('Error al obtener los detalles del ticket', error);
                  }
                );
            }
        });

      }


    public closeTicket(): void {
        // Lógica para cerrar el ticket
        console.log('Cerrar Ticket');
        // Puedes agregar aquí la lógica específica para cerrar el ticket
    }

    public changeStatus(): void {
        // Lógica para cambiar el estado del ticket
        console.log('Cambiar Status');
        // Puedes agregar aquí la lógica específica para cambiar el estado del ticket
    }

    public cargarBoton(): void{
        this.loading = true;
        setTimeout(() => {
            this.loading = false
        }, 2000);
    }

}
