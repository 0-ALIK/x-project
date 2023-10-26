import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';

import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    TabViewModule,
    DataViewModule,
    ButtonModule
  ]
})
export class ClientesModule { }
