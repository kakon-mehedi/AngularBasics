import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingService } from 'src/app/service/parking.service';

@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.css'],
})
export class AddParkingComponent {
  constructor(
    private fb: FormBuilder,
    private parkingService: ParkingService,
    private router: Router
  ) {}

  buttonText = 'Submit';
  buttonColor = 'primary';

  addParkingForm: FormGroup = this.fb.group({
    vehicleLicenseNumber: ['', [Validators.required]],
    vehicleType: ['', [Validators.required]],
    vehicleOwnerName: ['', [Validators.required]],
    vehicleOwnerPhone: ['', [Validators.required]],
    status: ['', [Validators.required]],
    carOwnerAddress: ['', [Validators.required]],
    carEntryTime: ['', [Validators.required]],
    carExitTime: ['', [Validators.required]],
    parkingCharge: ['', [Validators.required]],
  });

  handleSubmit() {
    if (this.addParkingForm.value.carOwnerAddress) {
      this.parkingService.addParking(this.addParkingForm.value);

      this.buttonText = 'Sent';
      this.buttonColor = 'warn';

      setTimeout(() => {
        this.router.navigate(['parkingList']);
      }, 1000);
    } else {
      alert('Requird field should not be empty!');
    }
  }
}
