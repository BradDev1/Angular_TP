import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent {
  nom ="";
  @Output() nameSend = new EventEmitter();

  Candidat: any[] = [
    {images: '../../../assets/images/scarlette.jpg', name: 'Scarlette', metier: 'Actrice'},
    {images: '../../../assets/images/jeff.webp', name: 'Jeff Tuche', metier: 'Président'},
    {images: '../../../assets/images/olivia.jpg', name: 'Olivia', metier: 'Actrice'},
    {images: '../../../assets/images/tom.jpg', name: 'Tom', metier: 'Actrice'},
  ]


  nameCandidat = '';
  sendName(name : any){
    this.nameCandidat = name;
  }

  sendEmiter(){
    console.log(this.nameCandidat);
    this.nameSend.emit(this.nameCandidat);
  }

}
