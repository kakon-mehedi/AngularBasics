import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParkingService } from 'src/app/service/parking.service';

@Component({
  selector: 'app-edit-parking',
  templateUrl: './edit-parking.component.html',
  styleUrls: ['./edit-parking.component.css'],
})
export class EditParkingComponent {
  constructor(
    private fb: FormBuilder,
    private parkingService: ParkingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  parking: any;

  buttonText = 'Update';
  buttonColor = 'primary';

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      let currentId = data['id'];
      this.parking = this.parkingService.findCurrentParking(+currentId);

      this.editParkingForm = this.fb.group({
        id: [this.parking.id],
        vehicleLicenseNumber: [
          this.parking.vehicleLicenseNumber,
          [Validators.required],
        ],
        vehicleType: ['', [Validators.required]],
        vehicleOwnerName: [
          this.parking.vehicleOwnerName,
          [Validators.required],
        ],
        vehicleOwnerPhone: [
          this.parking.vehicleOwnerPhone,
          [Validators.required],
        ],
        status: [this.parking.status, [Validators.required]],
        carOwnerAddress: [this.parking.carOwnerAddress, [Validators.required]],
        carEntryTime: [this.parking.carEntryTime, [Validators.required]],
        carExitTime: [this.parking.carExitTime, [Validators.required]],
        parkingCharge: [this.parking.parkingCharge, [Validators.required]],
      });
    });
  }

  editParkingForm: FormGroup = this.fb.group({});

  handleUpdate() {
    if (this.parking.status === 'out') {
      this.parkingService.updateParking(this.editParkingForm.value);

      this.buttonColor = 'warn';
      this.buttonText = 'Updated Successfully';

      setTimeout(() => {
        this.router.navigate(['parkingList']);
      }, 1500);
    } else {
      alert('Vehicle has not exit yet!');
    }
  }
}
