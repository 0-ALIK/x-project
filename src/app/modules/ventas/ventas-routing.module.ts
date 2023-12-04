import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerVentasComponent } from './pages/ver-ventas/ver-ventas.component';
import { VerPedidoByIdComponent } from './pages/ver-pedido-by-id/ver-pedido-by-id.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { EcommerceComponent } from './pages/ecommerce.component';
import { CarritoPageComponent } from './pages/carrito-page.component';
import { adminGuard } from 'src/app/guards/admin.guard';
import { noAdminGuard } from 'src/app/guards/no-admin.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [adminGuard],
        component: VerVentasComponent
    },
    {
        path: ':id',
        component: VerPedidoByIdComponent
    },
    {
        path: 'c/ecommerce',
        canActivate: [noAdminGuard],
        component: EcommerceComponent
    },
    {
        path: 'c/carrito',
        canActivate: [noAdminGuard],
        component: CarritoPageComponent
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
