import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PregFrecComponent } from './pages/preg-frec/preg-frec.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PregFrecComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyudaRoutingModule { }
