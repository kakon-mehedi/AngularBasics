import { Component } from '@angular/core';
import { Icategory } from 'src/app/model/Icategory';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryServiceService) {}

  categories: Icategory[] = [];

  ngOnInit() {
    this.categories = this.categoryService.categories;
  }
}
