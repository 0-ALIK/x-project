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
                redirectTo: ''
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
export class DashboardRoutingModule { }
