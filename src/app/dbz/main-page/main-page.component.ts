import { Component } from '@angular/core';

interface Personaje{
  nombre:String ,
  poder:number
}

@Component({
  selector: 'app-main-page',
  templateUrl:'./main-page.component.html',
  styles: [
  ]
})

export class MainPageComponent {

personajes:Personaje[]=[];

nuevo:Personaje={
  nombre:"",
  poder:0
}

guardar(){
  if(this.nuevo.nombre.trim().length===0) return;
  let anime:Personaje={
    nombre:this.nuevo.nombre,
    poder:this.nuevo.poder
  }
  this.personajes.push(anime);
  this.nuevo={nombre:'',poder:0}
}



cambiarNombre(event:any){
    this.nuevo.nombre=event.target.value;
    console.log(this.nuevo.nombre)
}

ejemplo(evento:any){
  evento.preventDefault();
  console.log(this.nuevo);
}
}
