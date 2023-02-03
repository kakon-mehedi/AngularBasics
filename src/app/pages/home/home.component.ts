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
  caseColor = '';

  handleClassTypeChange(selectedChildId: any) {
    console.log('changes occurd');
    this.selectedChildId = selectedChildId;
    this.noOfCases = [];

    if (this.classPerWeek && this.selectedCase) {
      this.showCaseOptions();
      this.calculatePrice();
    } else if (this.classPerWeek) {
      this.resetOptions();
      this.showCaseOptions();
    } else {
      this.showClassPerWeekOption();
    }
  }

  showClassPerWeekOption() {
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
      this.showCaseOptions();
    }
  }

  showCaseOptions() {
    this.noOfCases = this.dataService.case.filter(
      (data) => data.id === this.selectedChildId
    );
  }

  handleCaseChange(caseSelected: any) {
    this.selectedCase = caseSelected;
    this.calculatePrice();
  }

  calculatePrice() {
    this.setCaseColor();

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

  setCaseColor() {
    if (this.selectedCase === 'best') {
      this.caseColor = 'green';
    } else if (this.selectedCase === 'optimal') {
      this.caseColor = 'orange';
    } else {
      this.caseColor = 'red';
    }
  }

  resetOptions() {
    console.log('resetWorks');
    this.selectedCase = '';
    this.selectedPrice = '';

    this.showClassPerWeekOption();
  }
}
