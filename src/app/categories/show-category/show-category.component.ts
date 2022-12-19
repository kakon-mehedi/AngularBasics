import { Component } from '@angular/core';
import { Icategory } from 'src/app/model/Icategory';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css'],
})
export class ShowCategoryComponent {
  constructor(private categoryService: CategoryServiceService) {}
  category!: Icategory;

  ngOnInit() {
    if (this.categoryService.selectedCategory) {
      this.category = this.categoryService.selectedCategory;
    }
  }

  handleGoBackClick() {
    this.categoryService.handleGoBackClick();
  }
}
