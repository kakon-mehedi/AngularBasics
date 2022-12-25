import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-country-show-dialog',
  templateUrl: './country-show-dialog.component.html',
  styleUrls: ['./country-show-dialog.component.css'],
})
export class CountryShowDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public countryData: any) {}

  data: any;

  ngOnInit() {
    this.data = {
      name: this.countryData.name,
      region: this.countryData.region,
      capital: this.countryData.capital,
      subregion: this.countryData.subregion,
      population: this.countryData.population,
    };
  }
}
