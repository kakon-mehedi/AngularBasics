import { Component } from '@angular/core';
import { categoryEnum } from 'src/app/model/categoryEnum';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  constructor(private categoryService: CategoryServiceService) {}

  title = '';
  description = '';

  handleAddCategoryClick() {
    let category = {
      title: this.title,
      description: this.description,
    };

    this.categoryService.addCategory(category);
    this.categoryService.selectedComponentEvent.emit(categoryEnum.categories);
  }

  handleGoBackClick() {
    this.categoryService.handleGoBackClick();
  }
}
