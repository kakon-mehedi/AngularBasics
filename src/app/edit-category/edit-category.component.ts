import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  @Input() category!: ICategory;
  @Output() updateCategory = new EventEmitter<ICategory>();

  title: string = '';
  description: string = '';

  ngOnInit() {
    this.title = this.category.title;
    this.description = this.category.description;
  }

  handleUpdateClick() {
    let category: ICategory = {
      id: this.category.id,
      title: this.title,
      description: this.description,
    };

    this.updateCategory.emit(category);
  }
}
