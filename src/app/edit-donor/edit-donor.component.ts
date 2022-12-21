import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DonorService } from '../services/donor.service';

@Component({
  selector: 'app-edit-donor',
  templateUrl: './edit-donor.component.html',
  styleUrls: ['./edit-donor.component.css'],
})
export class EditDonorComponent {
  constructor(
    private fb: FormBuilder,
    private donorService: DonorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  donor: any;

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      let currentId = data['id'];
      this.donor = this.donorService.findCurrentDonor(+currentId); // here data
      //console.log('init', this.donor);
      this.editDonorForm = this.fb.group({
        id: [this.donor.id],
        name: [this.donor.name, [Validators.required]],
        mobile: [
          this.donor.mobile,
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
          ],
        ],
        address: [this.donor.address],
        lastDonationDate: [this.donor.lastDonationDate],
        email: [this.donor.email, [Validators.required, Validators.email]],
        bloodGroup: [this.donor.bloodGroup, [Validators.required]],
      });
    });
  }

  editDonorForm: FormGroup = this.fb.group({});

  get emailError() {
    let errorMessage = '';
    let emailControl = this.editDonorForm.get('email');

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

    let nameControl = this.editDonorForm.get('name');

    if (nameControl?.touched) {
      if (nameControl.errors?.['required']) {
        errorMessage = 'Name is Required';
      }
    }

    return errorMessage;
  }

  get mobileError() {
    let errorMessage = '';

    let mobileControl = this.editDonorForm.get('mobile');

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

  handleUpdateClick() {
    this.donorService.updateDonor(this.editDonorForm.value);
    this.router.navigateByUrl('/donorList');
  }
}
