import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ReclamosComponent } from './pages/reclamos/reclamos.component';

import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ReclamosComponent
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
