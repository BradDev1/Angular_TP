import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { showResult } from 'src/app/core/showResult.class';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss'],
})
export class ResultatComponent {
  @Input() nom = '';

  candidat = [
    'Olivia Santiago Community Manager',
    'Jane Swanson Chef de projet',
    'Elston Guillon Developpeur',
    'Lucas Pochoco Comptable',
  ];

  resultVote = new showResult(this.nom, 10);
  result = this.resultVote.getPourcentageVote();
}
