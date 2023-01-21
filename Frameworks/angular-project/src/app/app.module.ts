import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppComponent } from './core/app/app.component';

@NgModule({
  declarations: [ // Componentes y Types 'Agregar siempre el declaraciones'

  ],
  imports: [ // Módulos
    BrowserModule,
    CoreModule 
  ],
  providers: [], // Servicios e Inyección
  bootstrap: [AppComponent] // Componentes principal de aplicación
})

export class AppModule { }
