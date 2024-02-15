import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})

export class HeroeComponent{
  nombre:string="IronMan";
  edad:number=45;
  
  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  mostrarNombre():string{
    return `${this.nombre} -- ${this.edad}`;
  }
  cambiarNombre():void{
    this.nombre="SpiderMan";
  }
  cambiarEdad():void{
    console.log('hey...')
    this.edad=28;
  }
}