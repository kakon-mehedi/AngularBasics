import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { DonorService } from '../services/donor.service';

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css'],
})
export class BloodRequestComponent {
  constructor(
    private fb: FormBuilder,
    private donorService: DonorService,
    private dataService: DataService,
    private router: Router
  ) {}

  bloodRequestForm: FormGroup = this.fb.group({
    name: [],
    mobile: [],
    address: [],
    bloodGroup: [],
  });

  submitButtonClassName = 'btn btn-primary';
  submitButtonText = 'Submit';

  handleBloodRequestSubmit() {
    let formValue = this.bloodRequestForm.value;
    formValue.id = this.dataService.bloodRequest.length + 1;
    this.donorService.addBloodRequest(formValue);
    this.submitButtonText = 'Sending...';
    setTimeout(() => {
      this.submitButtonText = 'Reqiest Submitted Successfully';
      this.submitButtonClassName = 'btn btn-success';
    }, 1000);

    setTimeout(() => {
      this.router.navigateByUrl('/viewBloodRequest');
    }, 2500);
  }
}
