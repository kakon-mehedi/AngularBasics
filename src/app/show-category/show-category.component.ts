import { Component, Input } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css'],
})
export class ShowCategoryComponent {
  @Input() category!: ICategory;
}
