import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatComponent } from './features/candidat/candidat.component';
import { ResultatComponent } from './features/resultat/resultat.component';
import {FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CandidatComponent,
    ResultatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
