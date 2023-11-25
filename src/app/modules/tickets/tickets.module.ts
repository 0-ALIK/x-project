import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TicketsRoutingModule } from './tickets-routing.module';
import { VerTicketsComponent } from './pages/ver-tickets/ver-tickets.component';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { VerDetalleComponent } from './pages/ver-detalle/ver-detalle.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TicketsTableComponent } from './components/tickets-table/tickets-table.component';
import { AvatarModule } from 'primeng/avatar';
import { TagsColorsService } from './services/tags-colors.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ClientesModule } from '../clientes/clientes.module';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AnaliticaModule } from '../analitica/analitica.module';
import { TicketCardComponent } from './components/ticket-card.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
	declarations: [
		VerTicketsComponent,
        VerDetalleComponent,
        TicketsTableComponent,
        TicketCardComponent,
	],
	imports: [
		CommonModule,
		TicketsRoutingModule,
		TableModule,
		TagModule,
		ButtonModule,
		TagModule,
		SplitButtonModule,
        InputTextModule,
        AvatarModule,
        DropdownModule,
        InputTextareaModule,
        FileUploadModule,
        ImageModule,
        ClientesModule,
        AnaliticaModule
	],
    exports: [
        TicketCardComponent
    ],
    providers: [TagsColorsService, MessageService, DialogService]
})
export class TicketsModule { }
