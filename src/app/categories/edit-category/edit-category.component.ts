import { Component } from '@angular/core';
import { Icategory } from 'src/app/model/Icategory';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  constructor(private categoryService: CategoryServiceService) {}

  category!: Icategory;

  title = '';
  description = '';

  ngOnInit() {
    if (this.categoryService.selectedCategory) {
      this.category = this.categoryService.selectedCategory;
    }
    this.title = this.category.title;
    this.description = this.category.description;
  }

  handleUpdateCategoryClick() {
    let category = {
      id: this.category.id,
      title: this.title,
      description: this.description,
    };
    this.categoryService.updateCategory(category);
  }

  handleGoBackClick() {
    this.categoryService.handleGoBackClick();
  }
}
