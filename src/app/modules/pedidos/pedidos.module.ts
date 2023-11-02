import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PedidosAdminComponent } from './pedidos-admin/pedidos-admin.component';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PedidosAdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ListboxModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PedidosModule { }
