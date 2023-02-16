import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { emailJsInfos } from 'src/app/components/configuration/config';

@Component({
  selector: 'app-free-class',
  templateUrl: './free-class.component.html',
  styleUrls: ['./free-class.component.css'],
})
export class FreeClassComponent {
  constructor(private fb: FormBuilder) {
    //disable previous date before today as a min date
    this.minDate = new Date();

    // disable advance future 21 days from today as max date
    this.maxDate = new Date(
      this.currentYear + 0,
      this.currentMonth,
      this.currentDate + 21
    );
  }
  date = new Date();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();
  currentDate = this.date.getDate();

  minDate: Date;
  maxDate: Date;

  submitButtonText = 'Confirm Free Class';
  submitButtonColor = 'accent';

  formInputedValue: any = {};

  freeClassFormGroup = this.fb.group({
    parentName: ['', Validators.required],
    parentEmail: ['', [Validators.required, Validators.email]],
    childName: ['', Validators.required],
    childAge: ['', Validators.required],
    classDate: ['', Validators.required],
    classTime: ['', Validators.required],
  });

  get emailError() {
    let errorMessage = '';
    let emailControl = this.freeClassFormGroup.get('parentEmail');

    if (emailControl?.touched) {
      if (emailControl?.errors?.['required']) {
        errorMessage = 'Email should not be Empty';
      } else if (emailControl?.errors?.['email']) {
        errorMessage = 'Email should be valid';
      }
    }

    return errorMessage;
  }

  isFormValid = this.freeClassFormGroup.valid;

  showInputData() {
    this.formInputedValue = this.freeClassFormGroup.value;
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    this.submitButtonText = 'Sending...';
    this.submitButtonColor = 'warn';
    emailjs
      .send(
        emailJsInfos.serviceId,
        emailJsInfos.templateId,
        this.freeClassFormGroup.value,
        emailJsInfos.publicKey
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.submitButtonText = 'Free class request sent Succesfully!';
          this.submitButtonColor = 'primary';
        },
        (error) => {
          this.submitButtonText = 'Sending Failed! Try again.';
          this.submitButtonColor = 'warn';
        }
      );
  }
}
