import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, RouterLink, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.minLength(2), Validators.pattern(/^[\p{L}\p{Zs}\-]+$/u)]
  });

  email: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.email]
  });

  message: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)]
  });

  checkbox: FormControl = new FormControl(false, Validators.requiredTrue);

  toggleCheckbox():void {
    this.checkbox.setValue(!this.checkbox.value);
    this.checkbox.markAsDirty();
  }

  scrollUp():void {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  updateForm():void {
    this.name.setValue("");
    this.email.setValue("");
    this.message.setValue("");
  }
}
