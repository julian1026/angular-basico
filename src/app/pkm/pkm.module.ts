import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[PersonajesComponent]
})
export class PkmModule { }
