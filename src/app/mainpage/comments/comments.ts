import { Component } from '@angular/core';

interface commentFace {
  name: string;
  comment: string;
  profession: string;
  img: string;
}

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})

export class Comments {

  allComments: commentFace[] = [
    {
      name: 'A. Groblicki',
      comment:
        'Luis ist ein zuverlässiges und freundliches Teammitglied, das stets großes Engagement und professionelle Unterstützung bewiesen hat. Ich habe seine Geduld und seine strukturierte Arbeitsweise sehr geschätzt.',
      profession: 'Klassenkamerad',
      img: 'assets/img/lisa.jpg',
    },
    {
      name: 'Einstein Albert',
      comment:
        'E ist gleich m mal c Quadrat.',
      profession: 'Thinker',
      img: 'assets/img/einstein.jpg',
    },
  ];
}
