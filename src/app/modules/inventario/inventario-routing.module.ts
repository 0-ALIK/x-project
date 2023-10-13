import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerInventarioComponent } from './pages/ver-inventario/ver-inventario.component';
import { AgregarEditarProductoComponent } from './pages/agregar-editar-producto/agregar-editar-producto.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: VerInventarioComponent
    },
    {
        path: 'agregar-producto',
        component: AgregarEditarProductoComponent
    },
    {
        path: 'editar-producto/:id',
        component: AgregarEditarProductoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
