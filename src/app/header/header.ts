import { TRANSLATION, translationFace } from './../../../public/i18n/translation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  translation: translationFace = TRANSLATION;                  // nachfragen wie das funktioniert
}

console.log(TRANSLATION);
