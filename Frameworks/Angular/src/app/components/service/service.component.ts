import { Component } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector:`service-component`,
    template:`
        <h2>Service</h2>
        <button (click)="_user.showUser(_api.dataUser.username, _api.dataUser.password)"> Show User</button>
        <p>{{_api.dataUser.username}}, {{_api.dataUser.password}}</p>
        `
})

export class ServiceComponent {
    constructor(
        public _user: UserService,
        public _api: ApiService
    ){

    };
}