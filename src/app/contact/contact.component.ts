import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isFormSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.contactForm.valid) {
      // Effectuez ici l'envoi du formulaire ou toute autre action nécessaire.
      // Réinitialisez le formulaire si nécessaire.
      this.contactForm.reset();
      this.isFormSubmitted = false;
    }
  }


}
