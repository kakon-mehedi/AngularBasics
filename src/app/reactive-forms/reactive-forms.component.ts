import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  // Using Form Builder

  constructor(private fb: FormBuilder) {}

  signUpForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    hobbies: this.fb.array([]),
  });

  /*   Using Form Control 

  signUpForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    hobbies: new FormArray([]),
  });

*/

  // Forms Input Validations

  get emailError() {
    let errorMessage = '';
    let emailControl = this.signUpForm.get('email');

    if (emailControl?.touched) {
      if (emailControl?.errors?.['required']) {
        errorMessage = 'Email should not be Empty';
      } else if (emailControl?.errors?.['email']) {
        errorMessage = 'Email should be valid';
      }
    }

    return errorMessage;
  }

  get nameError() {
    let errorMessage = '';

    let nameControl = this.signUpForm.get('name');

    if (nameControl?.touched) {
      if (nameControl.errors?.['required']) {
        errorMessage = 'Name is Required';
      }
    }

    return errorMessage;
  }

  // Adding Dynamic Hobbies Form

  handleAddHobbyClick() {
    (this.signUpForm.get('hobbies') as FormArray).push(this.fb.control(''));
  }

  get hobbiesControl() {
    return this.signUpForm.get('hobbies') as FormArray;
  }

  // Handaling Events

  handleFormSubmit() {
    console.log(this.signUpForm);
  }
}
