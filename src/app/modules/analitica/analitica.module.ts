import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnaliticaRoutingModule } from './analitica-routing.module';
import { VerDashboardComponent } from './pages/ver-dashboard/ver-dashboard.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { TagModule } from 'primeng/tag';
import { TabMenuModule } from 'primeng/tabmenu';

import { GenerarReportesInventarioComponent } from './components/generar-reportes-inventario/generar-reportes-inventario.component';
import { GenerarReportesVentasComponent } from './components/generar-reportes-ventas/generar-reportes-ventas.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardClientesComponent } from './pages/dashboard-clientes/dashboard-clientes.component';
import { DashboardVentasComponent } from './pages/dashboard-ventas/dashboard-ventas.component';
import { InventarioDashboardComponent } from './pages/dashboar-inventario/inventario-dashboard.component';
import { IndicadorRendimientoComponent } from './pages/indicador-rendimiento/indicador-rendimiento.component';


@NgModule({
    declarations: [
        VerDashboardComponent,
        GenerarReportesInventarioComponent,
        GenerarReportesVentasComponent,
        DashboardCardComponent,
        DashboardClientesComponent,
        DashboardVentasComponent,
        InventarioDashboardComponent,
        IndicadorRendimientoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
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
        TabMenuModule
    ],
    // Recuerden exportar sus componentes aquí para que los otros módulos puedas acceder a ellos
    exports: [
        GenerarReportesInventarioComponent,
        GenerarReportesVentasComponent
    ]
})
export class AnaliticaModule { }
