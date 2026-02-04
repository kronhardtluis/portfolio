import { Component } from '@angular/core';
import { Socials } from '../../socials/socials';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-head',
  imports: [Socials, TranslatePipe],
  templateUrl: './head.html',
  styleUrl: './head.scss',
})
export class Head {

}
