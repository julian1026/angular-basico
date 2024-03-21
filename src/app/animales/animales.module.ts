import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common"
import { MamiferosComponent } from "./mamiferos/mamiferos.component";


@NgModule({
    declarations:[MamiferosComponent],
    imports:[CommonModule],
    exports:[MamiferosComponent]
})

export class AnimalesModule{};