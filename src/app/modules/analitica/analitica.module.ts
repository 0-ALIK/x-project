import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnaliticaRoutingModule } from './analitica-routing.module';
import { VerDashboardComponent } from './pages/ver-dashboard/ver-dashboard.component';
import { GenerarReportesClientesComponent } from './components/generar-reportes-clientes/generar-reportes-clientes.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
    declarations: [
        VerDashboardComponent,
        GenerarReportesClientesComponent
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
        AnaliticaRoutingModule
    ],
    // Recuerden exportar sus componentes aquí para que los otros módulos puedas acceder a ellos
    exports: [

    ]
})
export class AnaliticaModule { }
