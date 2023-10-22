import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerVentasComponent } from './pages/ver-ventas/ver-ventas.component';

const routes: Routes = [
    {
        path: '',
        component: VerVentasComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
