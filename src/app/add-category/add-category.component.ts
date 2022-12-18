import { Component, EventEmitter, Output } from '@angular/core';
import { ICategory } from '../models/ICategory';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  @Output() addCategory = new EventEmitter<any>();

  title: string = '';
  description: string = '';
  inputDefaultValue = 'kakon';

  handleClick() {
    let category: ICategory = {
      title: this.title,
      description: this.description,
    };

    this.inputDefaultValue = '';

    this.addCategory.emit(category);
  }
}
