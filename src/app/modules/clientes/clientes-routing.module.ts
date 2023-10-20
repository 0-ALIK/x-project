import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';

const routes: Routes = [
    {
        path: '',
        component: VerClientesComponent

    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
