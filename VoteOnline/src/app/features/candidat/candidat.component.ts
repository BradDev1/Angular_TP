import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss'],
})
export class CandidatComponent {
  nom = '';
  @Output() nameSend = new EventEmitter();

  candidat = [
    'Olivia Santiago Community Manager',
    'Jane Swanson Chef de projet',
    'Elston Guillon Developpeur',
    'Lucas Pochoco Comptable',
  ];

  nameCandidat = '';
  sendName(name: any) {
    this.nameCandidat = name;
  }

  sendEmiter() {
    this.nameSend.emit(this.nameCandidat);
  }
}
