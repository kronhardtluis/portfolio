import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  bubbleVisible: boolean = false;
  firstLoad:boolean = true;

  bubbleEvent(hover: boolean): void {
    this.bubbleVisible = hover;
    this.firstLoad = false;
  }
}
