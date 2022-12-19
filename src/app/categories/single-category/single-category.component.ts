import { Component, Input } from '@angular/core';
import { categoryEnum } from 'src/app/model/categoryEnum';
import { Icategory } from 'src/app/model/Icategory';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent {
  constructor(private categoryService: CategoryServiceService) {}
  @Input() category!: Icategory;

  handleViewClick() {
    this.categoryService.selectedCategory = this.category;
    this.categoryService.selectedComponentEvent.emit(categoryEnum.viewCategory);
  }

  handleEditClick() {
    this.categoryService.selectedCategory = this.category;
    this.categoryService.selectedComponentEvent.emit(categoryEnum.editCategory);
  }
}
