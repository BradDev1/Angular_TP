import { Injectable } from '@angular/core';
import { showResult } from 'src/app/core/showResult.class';

@Injectable({
  providedIn: 'root',
})
export class ShowResultService {
  constructor() {}

  doublonCandidat: Array<{ name: string }> = [];

  NomCandidat = '';
  pourcentage = 0;

  candidat = [
    new showResult('Olivia Santiago Community Manager', 0),
    new showResult('Jane Swanson Chef de projet', 0),
    new showResult('Elston Guillon Developpeur', 0),
    new showResult('Lucas Pochoco Comptable', 0),
  ];

  addPourcent(NomCandidat: any) {
    this.candidat.forEach((add) => {
      if (NomCandidat == add.NomCandidat) {
        console.log('test');
        add.pourcentage = add.pourcentage + 10;
      }
    });
  }

  minusPourcent(NomCandidat: any) {
    this.candidat.forEach((minus) => {
      if (NomCandidat != minus.NomCandidat) {
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
