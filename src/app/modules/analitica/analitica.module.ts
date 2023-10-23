import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnaliticaRoutingModule } from './analitica-routing.module';
import { VerDashboardComponent } from './pages/ver-dashboard/ver-dashboard.component';
import { GenerarReporteClientesComponent } from './components/generar-reporte-clientes/generar-reporte-clientes.component';

/* Acá haces los imports de los componentes de prime ng */

@NgModule({
    declarations: [
        VerDashboardComponent,
        GenerarReporteClientesComponent
    ],
    imports: [
        CommonModule,
        AnaliticaRoutingModule
    ],
    // Recuerden exportar sus componentes aquí para que los otros módulos puedas acceder a ellos
    exports: [

    ]
})
export class AnaliticaModule { }
