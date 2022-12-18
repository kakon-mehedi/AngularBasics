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
}
