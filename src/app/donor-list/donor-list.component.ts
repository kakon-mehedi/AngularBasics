import { Component } from '@angular/core';
import { Idonar } from '../model/Idonor';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css'],
})
export class DonorListComponent {
  constructor(private dataService: DataService) {}
  donorsList: Idonar[] = this.dataService.donorsData;
  searchQuery = '';
  filterBy = '';

  handleFilterChange(data: string) {}
}
