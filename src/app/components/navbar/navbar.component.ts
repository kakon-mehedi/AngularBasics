import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DataService],
})
export class NavbarComponent {
  constructor(private dataService: DataService) {}

  query: any = '';
  handleChange(query: any) {
    this.query = query;

    this.showResult(query);
  }

  deptData = this.dataService.getData();
  filterdData = this.dataService.getDataFilterd();
  searchResult: any[] = [];

  showResult(query: string) {
    this.searchResult = this.deptData.filter((student) => {
      return Object.values(student).some((item) =>
        item.toString().includes(this.query)
      );
    });

    console.log(this.searchResult);
  }
}
