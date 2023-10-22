import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GenerarReporteClientesComponent } from './modules/analitica/generar-reporte-clientes/generar-reporte-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NotFoundComponent,
    GenerarReporteClientesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
