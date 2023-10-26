import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamosComponent } from './pages/reclamos/reclamos.component';

const routes: Routes = [
  {
		path: '',
		pathMatch: 'full',
		component: ReclamosComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
