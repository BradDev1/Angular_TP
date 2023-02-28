import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { showResult } from 'src/app/core/showResult.class';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss'],
})
export class ResultatComponent {
  @Input() nom = '';
  @Output() nameSend = new EventEmitter();

  resultVote = new showResult();

  result : any;

  candidat = [
    'Olivia Santiago Community Manager',
    'Jane Swanson Chef de projet',
    'Elston Guillon Developpeur',
    'Lucas Pochoco Comptable',
  ];

  ngOnInit(): void {
    this.resultVote = new showResult(this.nom);
    this.resultVote.addPourcent();
    this.resultVote.minusPourcent();
    this.resultVote.detectDoublon();
    this.result = this.resultVote.getPourcentageVote();
  }

  sendEmiter() {
    this.nameSend.emit(this.result);
  }
}
