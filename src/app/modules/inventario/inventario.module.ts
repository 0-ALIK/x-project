import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { VerInventarioComponent } from './pages/ver-inventario/ver-inventario.component';
import { AgregarEditarProductoComponent } from './pages/agregar-editar-producto/agregar-editar-producto.component';
import { TableInventarioComponent } from './components/table-inventario/table-inventario.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator'; 

@NgModule({
  declarations: [
    VerInventarioComponent,
    AgregarEditarProductoComponent,
    TableInventarioComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    TableModule,
    PaginatorModule
  ]
})
export class InventarioModule { }
