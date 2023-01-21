import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ContainerComponent } from "./components/container/container.component";

@NgModule({
    declarations: [
        NavbarComponent, ContainerComponent
    ],
    exports: [
        NavbarComponent, ContainerComponent
    ]
})

export class SharedModule{}