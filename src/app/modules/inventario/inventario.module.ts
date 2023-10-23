import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InventarioRoutingModule } from './inventario-routing.module';

import { VerInventarioComponent } from './pages/ver-inventario/ver-inventario.component';
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
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    VerInventarioComponent,
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
    ConfirmDialogModule,
    FormsModule,
    FileUploadModule
 ],
  providers: [
    ConfirmationService, MessageService, DialogService
 ],

  exports: [AgregarProductoComponent],

})
export class InventarioModule { }
export class AgregarProductoModule { }
