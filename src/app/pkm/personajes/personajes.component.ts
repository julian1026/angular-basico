import { Component } from '@angular/core';


interface  Personaje{
  nombre:String;
  poder:number
}



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: []
})

export class PersonajesComponent {
    nuevo:Personaje={
      nombre:"Trunks",
      poder:3200
    }

    agregar(){
      console.log(this.nuevo)
    }

    capturar(event:any){
      console.log(event.target.value);
    }
}
