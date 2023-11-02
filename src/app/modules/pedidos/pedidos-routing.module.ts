import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosAdminComponent } from './pedidos-admin/pedidos-admin.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PedidosAdminComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
