import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  checkbox:boolean = false;

  toggleCheckbox():void {
    this.checkbox = !this.checkbox;
  }

  scrollUp():void {
    window.scroll({ top: 0, behavior: 'smooth' })
  }
}
