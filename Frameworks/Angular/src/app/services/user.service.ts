import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root' // Hace que ts agregue el servicio en app.module, se agrega en providers 
})
export class UserService {

  constructor(
    private _api: ApiService
  ) { }

  showUser(username: string, password: string){
    console.log(username, password)
  }
}
