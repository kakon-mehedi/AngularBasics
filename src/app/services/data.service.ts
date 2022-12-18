import { Injectable } from '@angular/core';
import { data } from '../../assets/data/DeptData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  deptData = data;
  deptDataFilterd = data;

  getData() {
    return this.deptData;
  }
  getDataFilterd() {
    return this.deptDataFilterd;
  }
}
