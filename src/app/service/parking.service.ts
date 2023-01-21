import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IparkingInfo } from '../models/IparkingInfo';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  constructor() {
    this.parkingInfoFromLs.subscribe((data) => {
      this.parkingInfoSaved = data;
    });
  }

  parkingArr: IparkingInfo[] = [];
  parkingInfoSaved: any = [];
  parkingInfoFromLs = new Subject();

  addParking(parkingInfo: IparkingInfo) {
    let newParkingInfo = {
      id: this.parkingArr.length + 1,
      ...parkingInfo,
    };

    this.parkingArr.push(newParkingInfo);

    localStorage.setItem('parkingData', JSON.stringify(this.parkingArr));

    this.getTotalParkingInfo();
  }

  getTotalParkingInfo() {
    let parkingInfos = localStorage.getItem('parkingData');
    if (parkingInfos) {
      parkingInfos = JSON.parse(parkingInfos);
    }

    this.parkingInfoFromLs.next(parkingInfos);
  }
}
