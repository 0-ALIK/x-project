import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

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
                loadChildren: () => import('../chat/chat.module').then(m => m.ChatModule)
            },
            {
                path: 'blog',
                loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)
            },
            {
                path: 'usuarios',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
