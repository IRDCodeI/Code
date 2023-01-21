import { Component, EventEmitter, Host, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.css']
})
export class UserApiComponent {


  //https://ngrx.io/
  // @Input('nombre') 'renombracion para uso html
  @Input('data') user: any // Función que esta con una clase, propiedad, etc que agrega funcionalidad
  @Output() borrar = new EventEmitter<number>()

  constructor(
    @Host() private _user: UserComponent // Recibe contexto total del padre, propiedades, servicios, métodos, etc
  ){
    console.log(_user)
  }

  BorrarUsuario(id: number){
    this.borrar.emit(id)
  }

  BorrarUsuarioHijo(id: number){
    this._user.users = this._user.users.filter(user => user['id'] != id)
  }
}
