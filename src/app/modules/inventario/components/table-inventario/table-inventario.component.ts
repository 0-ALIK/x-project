import { Component, OnInit } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator'; 


@Component({
  selector: 'app-table-inventario',
  templateUrl: './table-inventario.component.html',
  styleUrls: ['./table-inventario.component.css']
})
// datos quemados en la tabla de inventario
export class TableInventarioComponent implements OnInit {
public products = [
  {code : '001', name: 'Coca Cola',  category: 'Bebidas', type: 'Refresco', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '002', name: 'Pepsi',  category: 'Bebidas', type: 'Refresco', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '003', name: 'Manzana',  category: 'Frutas', type: 'Fruta', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '004', name: 'Pera',  category: 'Frutas', type: 'Fruta', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '005', name: 'Sandia',  category: 'Frutas', type: 'Fruta', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '006', name: 'Melon',  category: 'Frutas', type: 'Fruta', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '007', name: 'Mango',  category: 'Frutas', type: 'Fruta', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '008', name: 'Papaya',  category: 'Frutas', type: 'Fruta', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '009', name: 'Coco',  category: 'Frutas', type: 'Fruta', quantity: 10, price: 15.00, undefined: 'undefined'},
  {code : '010', name: 'Fresa',  category: 'Frutas', type: 'Fruta', quantity: 10, price: 15.00, undefined:'undefined'},
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

