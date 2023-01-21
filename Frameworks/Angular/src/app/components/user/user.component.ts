import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  
  constructor(
    private _http: HttpClient,
    private _builder: FormBuilder
  ){
    this.form = this._builder.group({
      name:['Name', Validators.required],
      email:['', Validators.compose([Validators.email, Validators.required])] ,
      clave:['', Validators.required] 
    })
  }

  isLogged: boolean = false
  isDisabled: boolean = false
  isActivated: string = 'Activar'
  typeSelected: string = 'Default'
  level:number = 0
  data: string = 'nameTest'

  users = []
  form: FormGroup

  log(e: any){
    console.log(e)
  }

  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((datos:any = []) => {
      this.users = datos
    })

  }

  borrarUsuario(id: number){
    this.users = this.users.filter(user => user['id'] != id)
  }

  enviar(values: any){
    console.log(values)
  }

}
