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
  mailing: FormGroup = new FormGroup({

    name: new FormControl('', {
    validators: [Validators.required, Validators.minLength(2), Validators.pattern(/^[\p{L}\p{Zs}\-]+$/u)]
  }),

  email: new FormControl('', {
    validators: [Validators.required, Validators.email]
  }),

  message: new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)]
  }),

  checkbox: new FormControl(false, Validators.requiredTrue)
  })


  toggleCheckbox():void {
    this.mailing.get('checkbox')?.setValue(!this.mailing.get('checkbox')?.value);
    this.mailing.get('checkbox')?.markAsDirty();
  }

  scrollUp():void {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  formSubmit():void {
    console.log(this.mailing.value);
    this.updateForm();
  }

  updateForm():void {
    this.mailing.reset();
  }
}
