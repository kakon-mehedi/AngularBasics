import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css'],
})
export class AddDonorComponent {
  constructor(private fb: FormBuilder) {}

  addDonorForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    mobile: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
    email: ['', [Validators.required, Validators.email]],
    bloodGroup: ['', [Validators.required]],
  });

  get emailError() {
    let errorMessage = '';
    let emailControl = this.addDonorForm.get('email');

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

    let nameControl = this.addDonorForm.get('name');

    if (nameControl?.touched) {
      if (nameControl.errors?.['required']) {
        errorMessage = 'Name is Required';
      }
    }

    return errorMessage;
  }

  get mobileError() {
    let errorMessage = '';

    let mobileControl = this.addDonorForm.get('mobile');

    if (mobileControl?.touched) {
      if (mobileControl.errors?.['required']) {
        errorMessage = 'Mobile is Required';
      } else if (mobileControl.errors?.['minlength']) {
        errorMessage = 'Minimum Length Should Be 11';
      } else if (mobileControl.errors?.['maxlength']) {
        errorMessage = 'Maximum Length Should Be 11';
      }
    }

    return errorMessage;
  }

  handleFormSubmit() {
    console.log(this.addDonorForm);
  }
}
