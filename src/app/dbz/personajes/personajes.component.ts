import { Component, Input } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface'
import { DbzService } from '../service/Dbz.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent {
  // Input() personaje:Personaje[]=[];
  
  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }
  constructor(private dbzService:DbzService){
    
  }
}
