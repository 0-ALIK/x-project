import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TicketsRoutingModule } from './tickets-routing.module';
import { VerTicketsComponent } from './pages/ver-tickets/ver-tickets.component';

import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { VerDetalleComponent } from './pages/ver-detalle/ver-detalle.component';
import { SplitButtonModule } from 'primeng/splitbutton';
@NgModule({
	declarations: [
		VerTicketsComponent,
  VerDetalleComponent,
	],
	imports: [
		CommonModule,
		TicketsRoutingModule,
		TableModule,
		ButtonModule,
		TagModule,
		SplitButtonModule
	]
})
export class TicketsModule { }
