import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  options = ['bus', 'car', 'truck', 'boat'];
  isSelectAll: Boolean = false;
  selectedOptions: string[] = [];

  onCheckboxChange(e: any) {
    this.isSelectAll = false;
  }

  onSelectAll(e: any) {
    if (e.target.checked) {
      console.log('I run');
      this.isSelectAll = true;
    } else {
      this.isSelectAll = false;
    }
  }

  onSubmit(form: any) {
    const formData: any = form.value;
    this.selectedOptions = [];
    for (const key in formData) {
      if (formData[key]) {
        this.selectedOptions.push(key);
      }
    }
  }
}
