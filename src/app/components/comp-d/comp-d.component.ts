import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp-d',
  templateUrl: './comp-d.component.html',
  styleUrls: ['./comp-d.component.css'],
})
export class CompDComponent {
  constructor(private dataService: DataService) {}

  name = this.dataService.userName;
}
