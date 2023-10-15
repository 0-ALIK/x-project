import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-inventario',
  templateUrl: './table-inventario.component.html',
  styleUrls: ['./table-inventario.component.css']
})
// datos quemados en la tabla de inventario
export class TableInventarioComponent implements OnInit {
public products = [
  {code : '001', name: 'Coca Cola',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 15, undefined: 'undefined'},
  {code : '002', name: 'Pepsi',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 0, undefined: 'undefined'},
  {code : '003', name: 'Fanta',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 5, undefined: 'undefined'},
  {code : '004', name: 'Sprite',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 10, undefined: 'undefined'},
  {code : '005', name: 'Coca Cola',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 15, undefined: 'undefined'},
  {code : '006', name: 'Pepsi',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 0, undefined: 'undefined'},
  {code : '007', name: 'Fanta',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 5, undefined: 'undefined'},
  {code : '008', name: 'Sprite',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 10, undefined: 'undefined'},
  {code : '009', name: 'Coca Cola',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 15, undefined: 'undefined'},
  {code : '010', name: 'Pepsi',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 0, undefined: 'undefined'},
];
first = 0;
rows = 10;
totalRecords = 120;

constructor() { }

ngOnInit(): void {
  
}

onPageChange(event: any){
  this.first = event.first;
  this.rows = event.rows;

}
}

