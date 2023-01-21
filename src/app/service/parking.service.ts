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

    let oldData = localStorage.getItem('parkingData');
    if (oldData) {
      this.parkingArr = JSON.parse(oldData);
    }
  }

  parkingArr: any = [];
  parkingInfoSaved: any = [];
  parkingInfoFromLs = new Subject();

  addParking(parkingInfo: IparkingInfo) {
    let newParkingInfo = {
      id: this.parkingArr.length + 1,
      ...parkingInfo,
    };

    let oldData = localStorage.getItem('parkingData');
    if (oldData) {
      this.parkingArr = JSON.parse(oldData);
    }

    this.parkingArr.push(newParkingInfo);

    localStorage.setItem('parkingData', JSON.stringify(this.parkingArr));
  }

  getTotalParkingInfo() {
    let parkingInfos = localStorage.getItem('parkingData');
    if (parkingInfos) {
      parkingInfos = JSON.parse(parkingInfos);
    }

    this.parkingInfoFromLs.next(parkingInfos);
  }
}
