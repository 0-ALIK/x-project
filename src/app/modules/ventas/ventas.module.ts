import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasRoutingModule } from './ventas-routing.module';
import { VerVentasComponent } from './pages/ver-ventas/ver-ventas.component';
import { VentasTableComponent } from './components/ventas-table/ventas-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag'


@NgModule({
    declarations: [
        VerVentasComponent,
        VentasTableComponent
    ],
    imports: [
        CommonModule,
        VentasRoutingModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        TabMenuModule,
        AvatarModule,
        TagModule
    ]
})
export class VentasModule { }
