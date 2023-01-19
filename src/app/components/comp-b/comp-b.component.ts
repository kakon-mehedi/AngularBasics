import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
  constructor(private dataService: DataService) {
    this.dataService.userName.subscribe((data) => {
      this.name = data;
    });
  }

  name!: string;

  changeName(data: string) {
    this.dataService.userName.next(data);
  }
}
