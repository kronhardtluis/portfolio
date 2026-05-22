import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import deTranslations from '../../../../public/i18n/de.json';

export interface CommentFace {
  name: string;
  comment: string;
  profession: string;
  img: string;
}

@Component({
  selector: 'app-comments',
  imports: [TranslatePipe],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})

export class Comments {
  comments: CommentFace[] = [
    {
      name: '',
      comment: '',
      profession: '',
      img: '',
    },
  ];

  ngOnInit() {
    this.comments = [];
    const commentsData = deTranslations.comments;
    for (const key of Object.keys(commentsData)) {
      const personData = (commentsData as any)[key];
      this.comments.push({
        name: key,
        comment: personData.comment,
        profession: personData.profession,
        img: personData.img,
      });
    }
  }
}
