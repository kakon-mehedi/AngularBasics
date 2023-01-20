import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css'],
})
export class ShowCartComponent {
  constructor(private cartService: CartService) {}

  totalProducts = this.cartService.productsInTheCart;
  totalPrice = this.cartService.calculateTotalPrice();
}
