import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroMayoristaComponent } from './pages/registro-mayorista/registro-mayorista.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registro-mayorista',
                component: RegistroMayoristaComponent
            },
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
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
export class AuthRoutingModule { }
