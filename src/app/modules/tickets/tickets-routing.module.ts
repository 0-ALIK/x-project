import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerTicketsComponent } from './pages/ver-tickets/ver-tickets.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: VerTicketsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TicketsRoutingModule { }
