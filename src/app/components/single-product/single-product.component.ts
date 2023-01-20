import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/models/Iproduct';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  constructor() {}
  @Input() product!: Iproduct;

  addToCartClick() {}
}
