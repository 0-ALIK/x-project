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
import { DialogAgregarCategoriaComponent } from './components/dialog-agregar-categoria/dialog-agregar-categoria.component';
import { DialogRealizarCompraComponent } from './components/dialog-realizar-compra/dialog-realizar-compra.component';
import { DialogGenerarReporteComponent } from './components/dialog-generar-reporte/dialog-generar-reporte.component';

import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
<<<<<<< HEAD
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
=======
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
>>>>>>> a1355660e91cccfd3515a8ebcb64173107e61df4

@NgModule({
  declarations: [
    VerInventarioComponent,
    TableInventarioComponent,
    TableEntradasComponent,
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
<<<<<<< HEAD
    FormsModule,
    FileUploadModule
 ],
  providers: [
    ConfirmationService, MessageService, DialogService
 ],

  exports: [AgregarProductoComponent],

=======
    DynamicDialogModule,
    FileUploadModule,
    FieldsetModule,
    MultiSelectModule,
    InputNumberModule,
    InputTextareaModule
  ],
  providers: [ ConfirmationService, MessageService, DialogService ]
>>>>>>> a1355660e91cccfd3515a8ebcb64173107e61df4
})
export class InventarioModule { }
export class AgregarProductoModule { }
