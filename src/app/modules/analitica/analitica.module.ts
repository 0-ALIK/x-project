import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnaliticaRoutingModule } from './analitica-routing.module';
import { VerDashboardComponent } from './pages/ver-dashboard/ver-dashboard.component';
import { GenerarReportesClientesComponent } from './components/generar-reportes-clientes/generar-reportes-clientes.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup } from '@angular/forms';

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
        FormControl,
        FormGroup,
        AnaliticaRoutingModule
    ],
    // Recuerden exportar sus componentes aquí para que los otros módulos puedas acceder a ellos
    exports: [

    ]
})
export class AnaliticaModule { }
