import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroMayoristaComponent } from './pages/registro-mayorista/registro-mayorista.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
    declarations: [
        LoginComponent,
        RegistroMayoristaComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        CheckboxModule,
        RadioButtonModule,
        InputNumberModule
    ]
})
export class AuthModule { }
