import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { showResult } from 'src/app/core/ShowResult.class';
import { ShowResultService } from 'src/app/core/showresult.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})

export class ResultatComponent {
  constructor(private showResultService:ShowResultService){}

  @Input() nom = '';
  @Output() nameSend = new EventEmitter();

  result : any;

  candidat : any;

  ngOnInit(): void {
    this.showResultService.addPourcent(this.nom);
    this.showResultService.minusPourcent(this.nom);
    this.result = this.showResultService.getPourcentageVote();
    this.candidat = this.showResultService.getCandidat();

  }

  sendEmiter() {
    this.nameSend.emit(this.result);
  }
}
