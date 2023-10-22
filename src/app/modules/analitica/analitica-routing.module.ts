import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerDashboardComponent } from './pages/ver-dashboard/ver-dashboard.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: VerDashboardComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnaliticaRoutingModule { }
