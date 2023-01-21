import { Injectable } from '@angular/core';
import { IparkingInfo } from '../models/IparkingInfo';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  constructor() {}

  parkingArr: IparkingInfo[] = [];

  addParking(parkingInfo: IparkingInfo) {
    let newParkingInfo = {
      id: this.parkingArr.length + 1,
      ...parkingInfo,
    };

    console.log(newParkingInfo);
  }
}
