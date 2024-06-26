import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeroesModule} from './heroes/heroes.module';
import {ContadorMudule} from './contador/contador.module';
import {AnimalesModule}  from './animales/animales.module';
import { DbzModule } from './dbz/dbz.module';
import { PkmModule } from './pkm/pkm.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorMudule,
    AnimalesModule,
    DbzModule,
    PkmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
