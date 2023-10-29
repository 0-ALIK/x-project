import { Component } from '@angular/core';

@Component({
  selector: 'app-compra-table',
  templateUrl: './compra-table.component.html',
  styleUrls: ['./compra-table.component.css']
})
export class CompraTableComponent {
  compra = [
    {numFactura: "12321", fecha: '1/1/2023', direccion: 'Punta Pacífica'}
  ]
  
  products = [
    { descripcion: 'Coca-Cola', cantidad: '12', precioUnitario: 2, precioTotal: 24 },
    { descripcion: 'Pepsi', cantidad: '10', precioUnitario: 2, precioTotal: 20 },
    { descripcion: 'Sprite', cantidad: '8', precioUnitario: 2, precioTotal: 16}
  ];
}
