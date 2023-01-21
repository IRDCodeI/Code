import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SharedModule } from "../shared/shared.module";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";



@NgModule({
    declarations:
    [
        AppComponent, HeaderComponent, MainComponent, FooterComponent
    ],
    imports:
    [
        CommonModule,
        SharedModule
    ],
    providers: [

    ],
    exports: [ // Exportacion de Modulo junto con su contendio, componente, etc
        AppComponent
    ]
})

export class CoreModule {}