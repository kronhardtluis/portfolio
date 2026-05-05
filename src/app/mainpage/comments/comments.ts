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
      name: 'Mona Lisa',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      profession: 'Model',
      img: 'assets/img/lisa.jpg',
    },
    {
      name: 'Einstein Albert',
      comment:
        'E ist gleich m mal c Quadrat.',
      profession: 'Thinker',
      img: 'assets/img/einstein.jpg',
    },
    {
      name: 'Mirjam Kronhardt',
      comment:
        'He should spend more time with his family, but he has so much fun with Coding.',
      profession: 'Wife',
      img: 'assets/img/wife.jpg',
    },
  ];
}
