import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { VerInventarioComponent } from './pages/ver-inventario/ver-inventario.component';
import { AgregarEditarProductoComponent } from './pages/agregar-editar-producto/agregar-editar-producto.component';


@NgModule({
  declarations: [
    VerInventarioComponent,
    AgregarEditarProductoComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule { }
