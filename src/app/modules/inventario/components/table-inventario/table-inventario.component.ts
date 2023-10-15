import { Component, NgModule } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-table-inventario',
  templateUrl: './table-inventario.component.html',
  styleUrls: ['./table-inventario.component.css']
})
export class TableInventarioComponent {
public products: any[] = []
}

@NgModule({
  imports: [PaginatorModule],
})

export class TableInventarioComponentModule {}
