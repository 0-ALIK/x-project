import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { VerDetalleComponent } from '../tickets/pages/ver-detalle/ver-detalle.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'inventario',
                loadChildren: () => import('../inventario/inventario.module').then(m => m.InventarioModule)
            },
            {
                path: 'ventas',
                redirectTo: ''
            },
            {
                path: 'clientes',
                redirectTo: ''
            },
            {
                path: 'tickets',
                loadChildren: () => import('../tickets/tickets.module').then(m => m.TicketsModule)
            },
            {
                path: 'chat',
                redirectTo: ''
            },
            {
                path: 'blog',
                redirectTo: ''
            },
            {
                path: 'usuarios',
                redirectTo: ''
            }
        ]

    },
    {

        path: 'ver-detalle',
        component: VerDetalleComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
