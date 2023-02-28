import { Component, Input, OnInit, Output } from '@angular/core';
import { showResult } from 'src/app/core/ShowResult.class';
@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
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

  Candidat: any[] = [
    {images: '../../../assets/images/scarlette.jpg', name: 'Scarlette', metier: 'Actrice'},
    {images: '../../../assets/images/jeff.webp', name: 'Jeff Tuche', metier: 'Président'},
    {images: '../../../assets/images/olivia.jpg', name: 'Olivia', metier: 'Actrice'},
    {images: '../../../assets/images/tom.jpg', name: 'Tom', metier: 'Actrice'},
  ]

}
