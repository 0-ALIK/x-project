import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerInventarioComponent } from './pages/ver-inventario/ver-inventario.component';
import { AgregarMarcaComponent } from './pages/agregar-marca/agregar-marca.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { EditarMarcaComponent } from './pages/editar-marca/editar-marca.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: VerInventarioComponent
    },
    {
        path: 'ver-inventario',
        component: VerInventarioComponent
    },
    {
        path: 'agregar-marca',
        component: AgregarMarcaComponent
    },
    {
        path: 'agregar-producto',
        component: AgregarProductoComponent
    },
    {
        path: 'editar-marca',
        component: EditarMarcaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InventarioRoutingModule { }
