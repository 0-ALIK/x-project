import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerDashboardComponent } from './pages/ver-dashboard/ver-dashboard.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { GenerarReportesInventarioComponent } from './components/generar-reportes-inventario/generar-reportes-inventario.component';

const routes: Routes = [
    {
        path: '',
        component: VerDashboardComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },
    {
        path: 'app-generar-reportes-clientes',
        component: GenerarReportesInventarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnaliticaRoutingModule { }
