import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css'],
})
export class CompCComponent {
  constructor(private dataService: DataService) {}

  name = this.dataService.userName;
}
