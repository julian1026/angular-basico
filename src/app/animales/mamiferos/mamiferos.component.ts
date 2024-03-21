import { Component } from '@angular/core';

interface Animal{
  tipoAnimales:String;
  tipoAlimentacion:String;
  Animales:String[];
  mostrar?:()=>String;
}

@Component({
  selector: 'app-mamiferos',
  templateUrl: './mamiferos.component.html',
  styleUrls: ['./mamiferos.component.css']
})

export class MamiferosComponent implements Animal{
  tipoAnimales:String='Mamiferos';
  tipoAlimentacion:String="Omnivoros";
  Animales:String[]=["Leon","Lobo","Perro","Tigre"];

  mostrar():String{
    return "Somos animales "+this.tipoAnimales+" y nos clasifican como "+this.tipoAlimentacion;
  }

}

