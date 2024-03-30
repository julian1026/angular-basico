import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/Dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl:'./main-page.component.html',
  styles: [
  ]
})

export class MainPageComponent {


  nuevo:Personaje={
    nombre:"Maestro roshi",
    poder:200
  }

  constructor(private  dbzService:DbzService){};
}
