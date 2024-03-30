import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/Dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})

export class AgregarComponent {

  @Input() nuevo:Personaje={
    nombre:"",
    poder:0
  }
   
//Output() onNuevoPersonaje:EventEmitter<Personaje>=new eventEmitter<>();


  
  constructor(private dbzService:DbzService){
  }

  agregar(){
    if(this.nuevo.nombre.trim().length===0) return;
    // this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
}
