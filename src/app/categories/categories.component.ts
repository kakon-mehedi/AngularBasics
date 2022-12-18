import { Component } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: ICategory[] = [
    { id: 1, title: 'Category 1', description: 'Category Description' },
  ];

  categoryDetails: ICategory | null = null;
  editCategoryDetails: ICategory | null = null;

  addCategory(category: ICategory) {
    category.id = this.categories.length + 1;
    this.categories.push(category);
  }

  handleView(category: ICategory) {
    this.categoryDetails = category;
    this.editCategoryDetails = null;
  }

  handleEdit(category: ICategory) {
    this.editCategoryDetails = category;
    this.categoryDetails = null;
  }

  handleUpdate(category: ICategory) {
    this.categories = this.categories.map((cat) => {
      if (cat.id === category.id) {
        return category;
      } else {
        return cat;
      }
    });
    this.editCategoryDetails = null;
  }

  handleDelete(category: ICategory) {
    this.categories = this.categories.filter((cat) => {
      return cat.id !== category.id;
    });
  }
}
