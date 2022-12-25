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

  ngOnInit() {
    this.apiService.getData().subscribe((responseData) => {
      this.data = responseData;
    });
  }
}
