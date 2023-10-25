import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent {
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

  nombreUsuario: string = "May Medina"

  items: any[]; 

  constructor() {
    this.items = [
      { label: 'Cerrar Ticket', command: () => this.closeTicket() },
      { label: 'Cambiar Status', command: () => this.changeStatus() }
    ];
  }

  closeTicket() {
    // Lógica para cerrar el ticket
    console.log('Cerrar Ticket');
    // Puedes agregar aquí la lógica específica para cerrar el ticket
  }

  changeStatus() {
    // Lógica para cambiar el estado del ticket
    console.log('Cambiar Status');
    // Puedes agregar aquí la lógica específica para cambiar el estado del ticket
  }
}
