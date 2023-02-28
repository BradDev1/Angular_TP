import { Injectable } from '@angular/core';
import { showResult } from 'src/app/core/ShowResult.class';

@Injectable({
  providedIn: 'root',
})
export class ShowResultService {
  constructor() {}

  doublonCandidat: Array<{ name: string }> = [];

  NomCandidat = '';
  pourcentage = 0;

  candidat: any[] = [
    new showResult({images: '../../../assets/images/scarlette.jpg', name: 'Scarlette', metier: 'Actrice', pourcentage: 0}),
    new showResult({images: '../../../assets/images/jeff.webp', name: 'Jeff Tuche', metier: 'Président', pourcentage: 0}),
    new showResult({images: '../../../assets/images/olivia.jpg', name: 'Olivia', metier: 'Actrice', pourcentage: 0}),
    new showResult({images: '../../../assets/images/tom.jpg', name: 'Tom', metier: 'Acteur', pourcentage: 0}),
  ]


  addPourcent(NomCandidat: any) {
    this.candidat.forEach((add) => {
      if (NomCandidat == add.NomCandidat.name) {
        add.pourcentage = add.pourcentage + 10;
      }
    });
  }

  minusPourcent(NomCandidat: any) {
    this.candidat.forEach((minus) => {
      if (NomCandidat != minus.NomCandidat.name) {
        minus.pourcentage = minus.pourcentage - 3.33;
      }
    });
  }

  getPourcentageVote() {
    return this.candidat.map((get) => get.pourcentage);
  }

  getCandidat(){
    return this.candidat.map((get) => get.NomCandidat);
  }
  detectDoublon() {
    this.doublonCandidat.push({ name: this.NomCandidat });

    this.doublonCandidat.forEach((element) => {
      console.log(element);
    });
  }
}
