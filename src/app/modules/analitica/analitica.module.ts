import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnaliticaRoutingModule } from './analitica-routing.module';
import { VerDashboardComponent } from './pages/ver-dashboard/ver-dashboard.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { TagModule } from 'primeng/tag';
import { TabMenuModule } from 'primeng/tabmenu';

import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardClientesComponent } from './components/dashboard-clientes/dashboard-clientes.component';
import { DashboardVentasComponent } from './components/dashboard-ventas/dashboard-ventas.component';
import { InventarioDashboardComponent } from './pages/inventario-dashboard/inventario-dashboard.component';
import { IndicadorRendimientoComponent } from './pages/indicador-rendimiento/indicador-rendimiento.component';
import { ReporteInventarioComponent } from './components/reporte-inventario.component';
import { ReporteClienteComponent } from './components/reporte-cliente.component';
import { ReporteVentaComponent } from './components/reporte-venta.component';
import { ReporteTicketsComponent } from './components/reporte-tickets.component';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
    declarations: [
        VerDashboardComponent,
        DashboardCardComponent,
        DashboardClientesComponent,
        DashboardVentasComponent,
        InventarioDashboardComponent,
        IndicadorRendimientoComponent,
        ReporteInventarioComponent,
        ReporteClienteComponent,
        ReporteVentaComponent,
        ReporteTicketsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        CheckboxModule,
        InputTextModule,
        ButtonModule,
        MultiSelectModule,
        InputNumberModule,
        CalendarModule,
        AnaliticaRoutingModule,
        ChartModule,
        TagModule,
        TabMenuModule,
        RadioButtonModule,
        MultiSelectModule
    ],
    exports: [
        ReporteClienteComponent,
        ReporteInventarioComponent,
        ReporteTicketsComponent,
        ReporteVentaComponent
    ]
})
export class AnaliticaModule { }
