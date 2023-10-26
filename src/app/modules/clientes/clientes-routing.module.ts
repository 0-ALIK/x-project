import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
import { PerfilClienteComponent } from './pages/perfil-cliente/perfil-cliente.component';
import { PerfilEmpresaComponent } from './pages/perfil-empresa/perfil-empresa.component';

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
