import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent implements OnInit {
    ticketNumber: number = 12391;
    products = [
        { descripcion: 'Coca-Cola', cantidad: '12', precioUnitario: 2, precioTotal: 24 },
        { descripcion: 'Pepsi', cantidad: '10', precioUnitario: 2, precioTotal: 20 },
        { descripcion: 'Sprite', cantidad: '8', precioUnitario: 2, precioTotal: 16}
    ];

    data = [
        { fecha: 'Coca-Cola', cliente: '12', direccion: 2, telefono: 24 },

    ];

    numeroMensajes: number = 0

    public nombreUsuario: string = "May Medina"

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
}
