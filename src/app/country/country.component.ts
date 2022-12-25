import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryShowDialogComponent } from '../dialog/country-show-dialog/country-show-dialog.component';
import { Dialog1Component } from '../dialog/dialog1/dialog1.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  constructor(public dialog: MatDialog) {}
  @Input() country: any;

  handleDeleteClick(countryNameData: string) {
    const dialogRef = this.dialog.open(Dialog1Component, {
      data: { countryName: countryNameData },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('You choose Yes');
      } else {
        console.log('You choose No');
      }
    });
  }

  handleShowClick() {
    this.dialog.open(CountryShowDialogComponent, {
      data: {
        name: this.country.name.common,
        capital: this.country.capital,
        region: this.country.region,
        subregion: this.country.subregion,
        population: this.country.population,
      },
    });
  }
  handleEditClick() {}
}
