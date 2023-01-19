import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent {
  constructor(private dataService: DataService) {
    this.dataService.userName.subscribe((data) => {
      this.name = data;
    });
  }

  name!: string;
}
