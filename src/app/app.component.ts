import { Component } from '@angular/core';
import { categoryEnum } from './model/categoryEnum';
import { CategoryServiceService } from './services/category-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private categoryService: CategoryServiceService) {}
  selectedComponent = categoryEnum.categories;

  // This is the main code who handles all the output event emit

  ngOnInit() {
    this.categoryService.selectedComponentEvent.subscribe((data) => {
      this.selectedComponent = data;
    });
  }

  handleAddCategoryClick() {
    this.selectedComponent = categoryEnum.addCategory;
  }
}
