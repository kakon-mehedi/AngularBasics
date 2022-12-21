import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-blood-request',
  templateUrl: './view-blood-request.component.html',
  styleUrls: ['./view-blood-request.component.css'],
})
export class ViewBloodRequestComponent {
  constructor(private dataService: DataService) {}

  currentBloodRequests = this.dataService.bloodRequest;

  handleDeleteClick(id: number) {
    this.dataService.bloodRequest = this.dataService.bloodRequest.filter(
      (data) => data.id != id
    );
    this.currentBloodRequests = this.dataService.bloodRequest;
  }
}
