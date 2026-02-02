import { Component } from '@angular/core';

interface commentFace {
  [key: string]: string;
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
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi fugit nostrum laudantium ab eaque debitis id nisi dolore nulla!',
      profession: 'Model',
      img: 'assets/img/lisa.jpg'
    },
    {
      name: 'Einstein Albert',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi fugit nostrum laudantium ab eaque debitis id nisi dolore nulla!',
      profession: 'Thinker',
      img: 'assets/img/einstein.jpg'
    },
    {
      name: 'Mirjam Kronhardt',
      comment: 'My husband should spend more time with his family, but he has so much fun with Coding.',
      profession: 'Wife',
      img: 'assets/img/wife.jpg'
    },
  ];
}
