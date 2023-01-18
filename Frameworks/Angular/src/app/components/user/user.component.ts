import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  constructor(){}

  isLogged: boolean = false
  isDisabled: boolean = false
  isActivated: string = 'Activar'
  typeSelected: string = 'Default'
  level:number = 0
  data: string = 'nameTest'

  log(e: any){
    console.log(e)
  }
}
