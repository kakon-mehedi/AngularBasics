import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private dataService: DataService) {}

  numberOfChild = this.dataService.numberOfChild;

  selectedChildId = '';
  selectedClassPerWeek = '';
  selectedCase = '';
  selectedPrice: any;

  classPerWeek: any;
  noOfCases: any;

  handleClassTypeChange(selectedChildId: any) {
    this.resetOptions();
    this.selectedChildId = selectedChildId;
    this.noOfCases = [];

    this.classPerWeek = this.dataService.classPerWeek.filter(
      (classInfo: any) => {
        if (classInfo.id === this.selectedChildId) {
          return classInfo;
        }
      }
    );
  }

  handleClassPerWeekChange(numberOfClassSelected: any) {
    this.selectedClassPerWeek = numberOfClassSelected;

    if (this.selectedCase) {
      this.calculatePrice();
    } else {
      this.showCase(this.selectedChildId);
    }
  }

  showCase(childInfoId: any) {
    this.selectedCase = childInfoId;
    this.noOfCases = this.dataService.case.filter(
      (data) => data.id === this.selectedCase
    );
  }

  handleCaseChange(caseSelected: any) {
    this.selectedCase = caseSelected;
    this.calculatePrice();
  }

  calculatePrice() {
    this.selectedPrice = this.dataService.price.filter((price: any) => {
      if (
        price.id == this.selectedChildId &&
        price.classPerWeek == this.selectedClassPerWeek &&
        price.case == this.selectedCase
      ) {
        return price;
      }
    });

    this.selectedPrice = this.selectedPrice[0];
  }

  resetOptions() {
    this.selectedChildId = '';
    this.selectedClassPerWeek = '';
    this.selectedCase = '';
    this.selectedPrice = '';
  }
}
