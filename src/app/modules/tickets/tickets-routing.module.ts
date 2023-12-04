import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerTicketsComponent } from './pages/ver-tickets/ver-tickets.component';
import { VerDetalleComponent } from './pages/ver-detalle/ver-detalle.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { adminGuard } from 'src/app/guards/admin.guard';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
        canActivate: [adminGuard],
		component: VerTicketsComponent
	},
	{
		path: ':id',
		component: VerDetalleComponent
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
export class TicketsRoutingModule { }
