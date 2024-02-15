import { Component } from "@angular/core";


@Component({
    selector:"app-contador",
    template:`
    <h1>{{titulo}}</h1>
    <h4>la base es: {{base}}</h4>
    <button (click)="acumular(base)">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>`
})

export class ContadorComponent{
    titulo:string = 'App Contador';
    numero:number=10;
    base:number=5;
  
    acumular(valor:number){
      this.numero+=valor;
    } 
}