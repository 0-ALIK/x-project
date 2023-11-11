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


@NgModule({
    declarations: [
        VerVentasComponent,
        VentasTableComponent,
        VerPedidoByIdComponent,
        ProductosPedidosComponent,
        PagosListComponent
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
        ClientesModule
    ]
})
export class VentasModule { }
