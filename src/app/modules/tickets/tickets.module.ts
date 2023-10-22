import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { VerTicketsComponent } from './pages/ver-tickets/ver-tickets.component';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		VerTicketsComponent,
	],
	imports: [
		CommonModule,
		TicketsRoutingModule,
		TableModule,
		TagModule,
		RatingModule,
		FormsModule,
	]
})
export class TicketsModule { }
