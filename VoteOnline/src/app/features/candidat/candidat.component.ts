import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  candidat = ['Scarlette',
              'Jeff',
              'Olivia',
              'Tom'
            ]

  images = ['../../../assets/images/scarlette.jpg',
            '../../../assets/images/jeff.webp',
            '../../../assets/images/olivia.jpg',
            '../../../assets/images/tom.jpg'
            ]

}
