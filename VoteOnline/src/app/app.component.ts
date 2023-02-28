import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nom = '';
  testCandidat = true;
  testResult = false;

  checkNom(nom :any){
    this.nom = nom;
    this.testCandidat = false;
    this.testResult = true;
  }
}
