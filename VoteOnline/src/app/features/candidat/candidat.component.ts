import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { showResult } from 'src/app/core/ShowResult.class';
import { ShowResultService } from 'src/app/core/showresult.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent {
  constructor(private showResultService:ShowResultService){}

  nom = '';
  @Output() nameSend = new EventEmitter();

  candidat = this.showResultService.getCandidat();

  nameCandidat = '';
  sendName(name: any) {
    this.nameCandidat = name;
  }

  sendEmiter() {
    this.nameSend.emit(this.nameCandidat);
  }


}
