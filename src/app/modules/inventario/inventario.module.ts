import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InventarioRoutingModule } from './inventario-routing.module';

import { VerInventarioComponent } from './pages/ver-inventario/ver-inventario.component';
import { AgregarEditarProductoComponent } from './pages/agregar-editar-producto/agregar-editar-producto.component';
import { AgregarMarcaComponent } from './pages/agregar-marca/agregar-marca.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { EditarMarcaComponent } from './pages/editar-marca/editar-marca.component';

import { TableInventarioComponent } from './components/table-inventario/table-inventario.component';
import { TableEntradasComponent } from './components/table-entradas/table-entradas.component';
import { ModalRealizarCompraComponent } from './components/modal-realizar-compra/modal-realizar-compra.component';
import { DialogAgregarCategoriaComponent } from './components/dialog-agregar-categoria/dialog-agregar-categoria.component';
import { DialogRealizarCompraComponent } from './components/dialog-realizar-compra/dialog-realizar-compra.component';
import { DialogGenerarReporteComponent } from './components/dialog-generar-reporte/dialog-generar-reporte.component';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    VerInventarioComponent,
    AgregarEditarProductoComponent,
    TableInventarioComponent,
    TableEntradasComponent,
    ModalRealizarCompraComponent,
    AgregarMarcaComponent,
    AgregarProductoComponent,
    EditarMarcaComponent,
    DialogAgregarCategoriaComponent,
    DialogRealizarCompraComponent,
    DialogGenerarReporteComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    InventarioRoutingModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    MenuModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [ ConfirmationService, MessageService ]
})
export class InventarioModule { }
