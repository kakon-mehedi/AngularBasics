import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private cartService: CartService) {
    this.cartService.totalItemAddedInTheCart.subscribe((totalItems) => {
      this.totalItemsInCart = totalItems;
      if (this.totalItemsInCart === 0) {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    });
  }
  hidden = false;
  totalItemsInCart: any;
}
