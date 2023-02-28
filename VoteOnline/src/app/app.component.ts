import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nom = '';

  checkNom(nom :any){
    console.log("test");
    this.nom = nom;
  }

}
