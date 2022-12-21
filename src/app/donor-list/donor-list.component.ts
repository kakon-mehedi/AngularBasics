import { Component } from '@angular/core';
import { Idonar } from '../model/Idonor';
import { DataService } from '../services/data.service';
import { DonorService } from '../services/donor.service';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css'],
})
export class DonorListComponent {
  constructor(
    private dataService: DataService,
    private donorService: DonorService
  ) {}

  donorsList: Idonar[] = this.dataService.donorsData.reverse();
  searchQuery = '';
  filterBy = '';

  handleFilterChange(data: string) {}

  handleDeleteClick(id: number) {
    this.donorService.deleteDonor(id);
    this.donorsList = this.dataService.donorsData; //updating donors data after  delation
  }
}
