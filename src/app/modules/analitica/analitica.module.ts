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
import { GenerarReporteClientesComponent } from './components/generar-reporte-clientes/generar-reporte-clientes.component';



@NgModule({
    declarations: [
        VerDashboardComponent,
        GenerarReporteClientesComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        DropdownModule,
        CheckboxModule,
        InputTextModule,
        ButtonModule,
        MultiSelectModule,
        AnaliticaRoutingModule
    ],
    
    // Recuerden exportar sus componentes aquí para que los otros módulos puedas acceder a ellos
    exports: [
         GenerarReporteClientesComponent
    ]
})
export class AnaliticaModule { }
