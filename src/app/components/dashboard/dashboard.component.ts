import { Component } from '@angular/core';
import { ParkingService } from 'src/app/service/parking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private parkingService: ParkingService) {
    let oldData = localStorage.getItem('parkingData');

    if (oldData) {
      this.parkingArr = JSON.parse(oldData);
      this.totalCarParked = this.parkingArr.length;

      this.parkingArr.map((parkingInfo: any) => {
        if (parkingInfo.vehicleType === 'Microbus') {
          this.totalMicrobus = this.totalMicrobus + 1;
        } else if (parkingInfo.vehicleType === 'Car') {
          this.totalCar = this.totalCar + 1;
        } else {
          this.totalTruck = this.totalTruck + 1;
        }
      });
    }
  }

  totalSlot = 100;

  parkingArr: any = [];

  totalCar = 0;
  totalMicrobus = 0;
  totalTruck = 0;

  totalCarParked = this.parkingArr.length;
}
