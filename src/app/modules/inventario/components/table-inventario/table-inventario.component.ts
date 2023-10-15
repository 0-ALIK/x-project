import { Component, OnInit } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator'; 


@Component({
  selector: 'app-table-inventario',
  templateUrl: './table-inventario.component.html',
  styleUrls: ['./table-inventario.component.css']
})
export class TableInventarioComponent implements OnInit {
public products: any[] = [];
constructor() { }
ngOnInit(): void {
  
}
}

