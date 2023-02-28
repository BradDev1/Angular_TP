import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { showResult } from 'src/app/core/showResult.class';
import { ShowResultService } from 'src/app/core/show-result.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss'],
})
export class ResultatComponent {

  constructor(private showResultService:ShowResultService){}

  @Input() nom = '';
  @Output() nameSend = new EventEmitter();

  resultVote = new showResult();

  result : any;

  candidat : any;

  ngOnInit(): void {

    this.resultVote = new showResult(this.nom);

    this.showResultService.addPourcent(this.nom);
    this.showResultService.minusPourcent(this.nom);
    this.result = this.showResultService.getPourcentageVote();
    this.candidat = this.showResultService.getCandidat();

  }

  sendEmiter() {
    this.nameSend.emit(this.result);
  }
}
