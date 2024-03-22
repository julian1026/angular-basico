import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl:'./main-page.component.html',
  styles: [
  ]
})

export class MainPageComponent {

  personajes:Personaje[]=[
    {nombre:"goku",poder:3000},
    {nombre:"vegeta",poder:2300}
  ];

  nuevo:Personaje={
    nombre:"Maestro roshi",
    poder:200
  }

  guardarPersonaje(personaje:Personaje){
    console.log(personaje)
    this.personajes.push(personaje)
  }

}
