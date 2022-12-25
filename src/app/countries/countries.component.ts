import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent {
  constructor(private apiService: ApiService) {}

  data: any = [];
  dataPaginate: any = [];

  ngOnInit() {
    this.apiService.getData().subscribe((responseData) => {
      this.data = responseData;
      this.dataPaginate = this.data.slice(0, 10);
    });
  }

  handlePageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.dataPaginate = this.data.slice(startIndex, endIndex);

    if (endIndex > this.data.length) {
      endIndex = this.data.length;
    }
  }
}
