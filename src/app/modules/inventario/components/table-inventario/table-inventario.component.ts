import { Component, OnInit } from '@angular/core';
import { FilterMetadata, MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-table-inventario',
  templateUrl: './table-inventario.component.html',
  styleUrls: ['./table-inventario.component.css']
})
// datos quemados en la tabla de inventario
export class TableInventarioComponent implements OnInit {

  items: MenuItem[];

public products = [
  {code : '001', name: 'Coca Cola',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 15, undefined: 'undefined'},
  {code : '002', name: 'Pepsi',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 20, undefined: 'undefined'},
  {code : '003', name: 'Fanta',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 5, undefined: 'undefined'},
  {code : '004', name: 'Sprite',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 10, undefined: 'undefined'},
  {code : '005', name: 'Coca Cola',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 15, undefined: 'undefined'},
  {code : '006', name: 'Pepsi',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 20, undefined: 'undefined'},
  {code : '007', name: 'Fanta',  category: 'Bebidas', type: 'queso', price: 10.00, quantity: 20, undefined: 'undefined'},
  {code : '008', name: 'Sprite',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 10, undefined: 'undefined'},
  {code : '009', name: 'Coca Cola',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 0, undefined: 'undefined'},
  {code : '010', name: 'Pepsi',  category: 'Bebidas', type: 'Refresco', price: 10.00, quantity: 0, undefined: 'undefined'},
];
first = 0;
rows = 10;
totalRecords = 120;

constructor(/*private messageService: MessageService*/) {
        this.items = [
            {
                label: 'Producto', 
                styleClass: 'p-splitButton-drop',
                routerLink: ['agregar-producto']
            },
            {
                label: 'Tipo',
                styleClass: 'p-splitButton-drop'
            },
            // { separator: true },
            // { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
        ];
    }

    // Para el SearchBar
    value: string | undefined;    
    value2: string | undefined;

ngOnInit(): void {
  
}

onPageChange(event: any){
  this.first = event.first;
  this.rows = event.rows;

}

filters: { [s: string]: FilterMetadata } = {};

// save(severity: string) {
//   this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
// }

// update() {
//   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
// }

// delete() {
//   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
// }

}


