import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService],
})
export class HomeComponent {
  constructor(private data: DataService) {}

  deptData = this.data.getDataFilterd();

  showData() {}
}
