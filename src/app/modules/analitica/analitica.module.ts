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
import { RadioButtonModule } from 'primeng/radiobutton';

import { DashboardInventarioComponent } from './pages/dashboard-inventario/inventario-dashboard.component';
import { DashboardClientesComponent } from './pages/dashboard-clientes/dashboard-clientes.component';
import { DashboardVentasComponent } from './pages/dashboard-ventas/dashboard-ventas.component';
import { IndicadorRendimientoComponent } from './pages/indicador-rendimiento/indicador-rendimiento.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';

import { DashboardService } from './services/dashboard.service';
import { GenerarReportesClientesComponent } from './components/generar-reportes-clientes/generar-reportes-clientes.component';
import { GenerarReportesInventarioComponent } from './components/generar-reportes-inventario/generar-reportes-inventario.component';
import { GenerarReportesVentasComponent } from './components/generar-reportes-ventas/generar-reportes-ventas.component';
import { GenerarReportesTicketsComponent } from './components/generar-reportes-tickets/generar-reportes-tickets.component';
import { GenerarReportesEmpresasComponent } from './components/generar-reportes-empresas/generar-reportes-empresas.component';



@NgModule({
    declarations: [
        VerDashboardComponent,
        DashboardCardComponent,
        DashboardClientesComponent,
        DashboardVentasComponent,
        IndicadorRendimientoComponent,

        DashboardInventarioComponent,
        GenerarReportesClientesComponent,
        GenerarReportesInventarioComponent,
        GenerarReportesVentasComponent,
        GenerarReportesTicketsComponent,
        GenerarReportesEmpresasComponent,

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
    ],
    providers: [
        DashboardService
    ]
})
export class AnaliticaModule { }
