import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const usuario = JSON.parse(localStorage.getItem('usuario') || '');

let redirect = 'inventario';

if(usuario) {

    if(usuario.tipo === 'cliente') {
        if(Array.isArray(usuario.data)) {
            redirect = '/app/clientes/perfil/cliente/'+usuario.data[0].id_cliente
        } else {
            redirect = '/app/clientes/perfil/cliente/'+usuario.data.id_cliente
        }
    }


    if(usuario.tipo === 'empresa') {
        if(Array.isArray(usuario.data)) {
            redirect = '/app/clientes/perfil/empresa/'+usuario.data[0].id_empresa
        } else {
            redirect = '/app/clientes/perfil/empresa/'+usuario.data.id_empresa
        }
    }

}

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: redirect,
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
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
