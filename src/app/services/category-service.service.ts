import { EventEmitter, Injectable, Output } from '@angular/core';
import { categoryEnum } from '../model/categoryEnum';
import { Icategory } from '../model/Icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  constructor() {}

  categories: Icategory[] = [
    { id: 1, title: 'Category 1', description: 'Category 1 Description' },
  ];

  @Output() selectedComponentEvent = new EventEmitter<categoryEnum>();

  selectedCategory: Icategory | null = null;

  addCategory(category: Icategory) {
    if (!category.id) category.id = this.categories.length + 1;
    this.categories.push(category);
  }

  updateCategory(category: Icategory) {
    this.categories = this.categories.map((cat) => {
      if (cat.id === category.id) {
        return category;
      } else {
        return cat;
      }
    });

    this.selectedComponentEvent.emit(categoryEnum.categories);
  }
  deleteCategory(category: Icategory) {}

  handleGoBackClick() {
    this.selectedComponentEvent.emit(categoryEnum.categories);
  }
}
