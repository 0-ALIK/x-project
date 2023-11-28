import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerVentasComponent } from './pages/ver-ventas/ver-ventas.component';
import { VerPedidoByIdComponent } from './pages/ver-pedido-by-id/ver-pedido-by-id.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { EcommerceComponent } from './pages/ecommerce.component';

const routes: Routes = [
    {
        path: '',
        component: VerVentasComponent
    },
    {
        path: ':id',
        component: VerPedidoByIdComponent
    },
    {
        path: 'c/ecommerce',
        component: EcommerceComponent
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
export class VentasRoutingModule { }
