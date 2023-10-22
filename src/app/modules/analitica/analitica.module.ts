import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnaliticaRoutingModule } from './analitica-routing.module';
import { VerDashboardComponent } from './pages/ver-dashboard/ver-dashboard.component';


@NgModule({
    declarations: [
        VerDashboardComponent
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
