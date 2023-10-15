import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-inventario',
  templateUrl: './table-inventario.component.html',
  styleUrls: ['./table-inventario.component.css']
})
// datos quemados en la tabla de inventario
export class TableInventarioComponent implements OnInit {
public products = [
  {code : '001', name: 'Coca Cola',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 15.00, undefined: 'undefined'},
  {code : '002', name: 'Pepsi',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 15.00, undefined: 'undefined'},
  {code : '003', name: 'Fanta',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 15.00, undefined: 'undefined'},
  {code : '004', name: 'Sprite',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 7.00, undefined: 'undefined'},
  {code : '005', name: 'Manzana',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 15.00, undefined: 'undefined'},
  {code : '006', name: 'Naranja',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 10.00, undefined: 'undefined'},
  {code : '007', name: 'Limon',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 10.00, undefined: 'undefined'},
  {code : '008', name: 'Jamaica',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 5.00, undefined: 'undefined'},
  {code : '009', name: 'Mango',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 0.00, undefined: 'undefined'},
  {code : '010', name: 'Tamarindo',  category: 'Bebidas', type: 'Refresco', price: 10, quantity: 5.00, undefined: 'undefined'}

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

