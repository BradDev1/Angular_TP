import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { showResult } from 'src/app/core/showResult.class';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss'],
})
export class ResultatComponent {

  ngOnInit(): void {
    alert(this.nom);
  }

  @Input() nom = '';


  candidat = [
    'Olivia Santiago Community Manager',
    'Jane Swanson Chef de projet',
    'Elston Guillon Developpeur',
    'Lucas Pochoco Comptable',
  ];

  resultVote = new showResult(this.nom);
  add = this.resultVote.addPourcent();
  minus = this.resultVote.minusPourcent();
  result = this.resultVote.getPourcentageVote();
}
