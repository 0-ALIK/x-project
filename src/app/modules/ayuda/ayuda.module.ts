import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyudaRoutingModule } from './ayuda-routing.module';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { PregFrecComponent } from './pages/preg-frec/preg-frec.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { GalleryMenuComponent } from './components/gallery-menu/gallery-menu.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ReactiveFormsComponent,
    PregFrecComponent,
    GalleryMenuComponent
  ],
  imports: [
    CommonModule,
    AyudaRoutingModule,
    InputTextModule,
    CardModule,
    ButtonModule
  ]
})
export class AyudaModule { }
