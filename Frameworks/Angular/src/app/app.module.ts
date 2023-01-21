import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './components/service/service.component';
import { UserApiComponent } from './components/user-api/user-api.component';
import { DirecDirective } from './components/user/directives/direc.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ServiceComponent,
    UserApiComponent,
    DirecDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
