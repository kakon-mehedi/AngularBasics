import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Idonar } from '../model/Idonor';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  constructor(private dataService: DataService, private router: Router) {}

  newDonor: Idonar | null = null;

  findCurrentDonor(currentDonorId: number) {
    let currentDonor = this.dataService.donorsData.filter(
      (don) => don.id === currentDonorId
    );
    return currentDonor[0];
  }

  addDonor(donor: Idonar) {
    if (!donor.id) donor.id = this.dataService.donorsData.length + 1;
    this.dataService.donorsData.push(donor);
  }

  updateDonor(updatedDonor: Idonar) {
    this.dataService.donorsData = this.dataService.donorsData.map((data) => {
      if (data.id == updatedDonor.id) {
        return updatedDonor;
      } else return data;
    });
  }

  deleteDonor(id: number) {
    this.dataService.donorsData = this.dataService.donorsData.filter(
      (data) => data.id !== id
    );
  }

  addBloodRequest(formData: any) {
    this.dataService.bloodRequest.push(formData);
  }
}
