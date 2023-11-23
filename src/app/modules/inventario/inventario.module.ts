import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InventarioRoutingModule } from './inventario-routing.module';

import { VerInventarioComponent } from './pages/ver-inventario/ver-inventario.component';
import { AgregarMarcaComponent } from './pages/agregar-marca/agregar-marca.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

import { TableInventarioComponent } from './components/table-inventario/table-inventario.component';
import { TableEntradasComponent } from './components/table-entradas/table-entradas.component';
import { DialogAgregarCategoriaComponent } from './components/dialog-agregar-categoria/dialog-agregar-categoria.component';
import { DialogRealizarCompraComponent } from './components/dialog-realizar-compra/dialog-realizar-compra.component';

import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
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
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogVerMarcasComponent } from './components/dialog-ver-marcas/dialog-ver-marcas.component';

@NgModule({
    declarations: [
        VerInventarioComponent,
        TableInventarioComponent,
        TableEntradasComponent,
        AgregarMarcaComponent,
        AgregarProductoComponent,
        DialogAgregarCategoriaComponent,
        DialogRealizarCompraComponent,
        DialogVerMarcasComponent
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
        DynamicDialogModule,
        FileUploadModule,
        FieldsetModule,
        MultiSelectModule,
        InputNumberModule,
        InputTextareaModule,
        AvatarModule,
        TagModule,
        ImageModule,
        ReactiveFormsModule,
        SharedModule,
        CalendarModule,
        ChartModule,
        SkeletonModule
    ],
    providers: [ ConfirmationService, MessageService, DialogService ]
})
export class InventarioModule { }
