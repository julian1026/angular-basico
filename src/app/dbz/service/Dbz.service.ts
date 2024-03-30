import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
export class DbzService{

    private _personajes:Personaje[]=[
        {nombre:"goku",poder:3000},
        {nombre:"vegeta",poder:2300}
    ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }
    constructor(){
        console.log("Servicio DBZ inicializado...");
    }
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}