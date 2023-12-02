import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistroMayoristaComponent } from './modules/auth/pages/registro-mayorista/registro-mayorista.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
    },
    {
        path: 'app',
        loadChildren: () => import('./modules/main/main.module').then(module => module.MainModule)
    },
    {
        path: 'registro',
        component: RegistroMayoristaComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
