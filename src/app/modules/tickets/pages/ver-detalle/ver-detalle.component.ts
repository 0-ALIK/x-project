import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ReclamosService } from '../../services/tickets.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';

@Component({
  selector: 'app-ver-detalle',
  template: `
    <main>
        <p class="mb-2 text-3xl font-bold">Ticket #{{ reclamo?.id_reclamo }}</p>

        <div class="fondo flex flex-column p-2 border-round">

            <section class="flex flex-column sm:flex-row align-items-center justify-content-between mb-2">
                <alik-card-user [cliente]="reclamo?.cliente"></alik-card-user>
            </section>

            <section class="flex flex-column md:flex-row gap-2 mb-2">
                <div class="flex flex-column w-full border-round">
                    <p class="m-0 my-1 text-lg">Detalles</p>
                    <textarea class="w-full h-20rem md:h-full text-justify" [autoResize]="true" pInputTextarea >{{ reclamo?.descripcion }}</textarea>
                </div>

                <div class="flex flex-column w-full border-round w-full" #evidenciasBox>
                    <p class="m-0 my-1 text-lg">Evidencias</p>
                    <div>
                        <img class="w-full h-20rem md:h-full border-round" src="{{ reclamo?.evidencia }}" alt="evidencia">
                    </div>
                </div>
            </section>
            <section class="mb-2">
                <venta-card [pedido]="reclamo?.pedido"></venta-card>
            </section>
            <section class="flex flex-row">
                <p-button label="Abrir chat" icon="pi pi-comments" [loading]="loading" (onClick)="cargarBoton()" [disabled]="false"></p-button>
                <p-button label="Cerrar ticket" styleClass="ml-2" icon="pi pi-exclamation-triangle" severity="danger" [disabled]="false"></p-button>
            </section>
        </div>

    </main>
  `,
  styleUrls: ['./ver-detalle.component.css'],
})

export class VerDetalleComponent implements OnInit {

    public cliente: any;

    public Usuario: any;

    uploadedFiles: any[] = [];

    ticketNumber: number = 12391;

    public pedido: any;

    loading: boolean = false;

    public items!: any[];

    public activityValues: number[] = [0, 100];

    public selectedProduct!: any;

    public reclamo: Reclamo | undefined;

    public ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private reclamosService: ReclamosService,
        private clientesService: ClientesService,
    ) { }

    public ngOnInit(): void {

        this.items = [
            { label: 'Cerrar Ticket', command: () => this.closeTicket() },
            { label: 'Cambiar Status', command: () => this.changeStatus() }
        ];

        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.ticketNumber = id;
                console.log('ID del ticket:', this.ticketNumber);

                this.reclamosService.getReclamoById(this.ticketNumber).subscribe({
                    next: ({data}) => {
                        this.reclamo = data;
                        console.log(this.reclamo);
                    }
                });
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

