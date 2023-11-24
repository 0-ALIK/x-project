import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamoPrioridad } from 'src/app/interfaces/raclamo.interface';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css'],
})

export class VerDetalleComponent implements OnInit {
    uploadedFiles: any[] = [];

    ticketNumber: number = 12391;

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
