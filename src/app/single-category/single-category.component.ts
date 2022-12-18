import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent {
  @Input() category: ICategory | null = null;
  @Output() viewCategory = new EventEmitter<any>();
  @Output() editCategory = new EventEmitter<any>();
  @Output() deleteCategory = new EventEmitter<any>();

  handleShowClick() {
    this.category && this.viewCategory.emit(this.category);
  }

  handleEditClick() {
    this.category && this.editCategory.emit(this.category);
  }

  handleDeleteClick() {
    this.category && this.deleteCategory.emit(this.category);
  }
}
