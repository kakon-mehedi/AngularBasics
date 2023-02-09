import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

    console.log(this.maxDate);
  }
  date = new Date();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();
  currentDate = this.date.getDate();

  minDate: Date;
  maxDate: Date;

  freeClassFormGroup = this.fb.group({
    parentName: ['', Validators.required],
    parentEmail: ['', Validators.required],
    childName: ['', Validators.required],
    childAge: ['', Validators.required],
    classDate: ['', Validators.required],
    classTime: ['', Validators.required],
  });

  handleSubmit() {
    console.log(this.freeClassFormGroup.value);
  }
}
