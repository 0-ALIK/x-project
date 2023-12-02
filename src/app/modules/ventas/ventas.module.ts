import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasRoutingModule } from './ventas-routing.module';
import { VerVentasComponent } from './pages/ver-ventas/ver-ventas.component';
import { VerPedidoByIdComponent } from './pages/ver-pedido-by-id/ver-pedido-by-id.component'
import { VentasTableComponent } from './components/ventas-table/ventas-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { ClientesModule } from '../clientes/clientes.module';
import { ProductosPedidosComponent } from './components/productos-pedidos/productos-pedidos.component';
import { PagosListComponent } from './components/pagos-list/pagos-list.component';
import { ImportesCalcService } from './services/importes-calc.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AgregarEditarPagoComponent } from './components/agregar-editar-pago/agregar-editar-pago.component';
import { DropdownModule } from 'primeng/dropdown';
import { AnaliticaModule } from '../analitica/analitica.module';
import { TicketCardComponent } from '../tickets/components/ticket-card.component';
import { EcommerceComponent } from './pages/ecommerce.component';
import { CardModule } from 'primeng/card';
import { CardCarritoComprasComponent } from './components/card-carrito-compras/card-carrito-compras.component';
import { ImageModule } from 'primeng/image';
import { CarritoPageComponent } from './pages/carrito-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesModule } from 'primeng/messages';

@NgModule({
    declarations: [
        VerVentasComponent,
        VentasTableComponent,
        VerPedidoByIdComponent,
        ProductosPedidosComponent,
        PagosListComponent,
        AgregarEditarPagoComponent,
        EcommerceComponent,
        CardCarritoComprasComponent,
        CarritoPageComponent,
    ],
    imports: [
        CommonModule,
        VentasRoutingModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        TabMenuModule,
        AvatarModule,
        TagModule,
        AccordionModule,
        ClientesModule,
        InputNumberModule,
        FormsModule,
        DropdownModule,
        AnaliticaModule,
        DropdownModule,
        TicketCardComponent,
        CardModule,
        ImageModule,
        SharedModule,
        MessagesModule
    ],
    providers: [ImportesCalcService, MessageService, DialogService]
})
export class VentasModule { }
