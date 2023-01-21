import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './shared/components/app/app.component';

@NgModule({
  declarations: [ // Componentes y Types 'Agregar siempre el declaraciones'
    AppComponent
  ],
  imports: [ // Módulos
    BrowserModule
  ],
  providers: [], // Servicios e Inyección
  bootstrap: [AppComponent] // Componentes principal de aplicación
})
export class AppModule { }
