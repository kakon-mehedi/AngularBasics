import { Component, Input } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent {
  @Input() category: ICategory | null = null;
}
