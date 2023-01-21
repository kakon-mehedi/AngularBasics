import { Component } from '@angular/core';
import { ParkingService } from 'src/app/service/parking.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css'],
})
export class ParkingListComponent {
  constructor(private parkingService: ParkingService) {
    this.getTotalParkingInfo();
  }

  totalParkingInfo = this.parkingService.parkingInfoSaved;

  getTotalParkingInfo() {
    this.parkingService.getTotalParkingInfo();
  }

  ngOnInit() {
    this.totalParkingInfo = this.parkingService.parkingInfoSaved;
  }
}
