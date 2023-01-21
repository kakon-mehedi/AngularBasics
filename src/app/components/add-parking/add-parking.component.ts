import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParkingService } from 'src/app/service/parking.service';

@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.css'],
})
export class AddParkingComponent {
  constructor(
    private fb: FormBuilder,
    private parkingService: ParkingService
  ) {}

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
    this.parkingService.addParking(this.addParkingForm.value);
  }
}
