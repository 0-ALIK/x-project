import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'inventario',
                pathMatch: 'full'
            },
            {
                path: 'inventario',
                loadChildren: () => import('../inventario/inventario.module').then(m => m.InventarioModule)
            },
            {
                path: 'ventas',
                loadChildren: () => import('../ventas/ventas.module').then(m => m.VentasModule)
            },
            {
                path: 'clientes',
                loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesModule)
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
            },
            {
                path: 'analitica',
                loadChildren: () => import('../analitica/analitica.module').then(m => m.AnaliticaModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
