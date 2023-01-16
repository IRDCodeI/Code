import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ // Componentes y Types 'Agregar siempre el declaraciones'
    AppComponent, HeaderComponent
  ],
  imports: [ // Modulos
    BrowserModule
  ],
  providers: [], // Servicios e Inyeccion
  bootstrap: [AppComponent] // Componentes principal de aplicacion
})
export class AppModule { }
