import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/models/Iproduct';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  constructor(private cartService: CartService) {}
  @Input() product!: Iproduct;

  savedProductsInTheCart: any[] = [];
  item = 0;
  decrementButtonDisable = false;
  showCounterButtons = false;
  addToCartClicked = false;

  getAddedItemsData() {
    this.savedProductsInTheCart.map((savedProduct) => {
      if (savedProduct.productInfo.id === this.product.id) {
        this.item = savedProduct.items;
        this.addToCartClicked = true;
      }
    });
  }

  handleAddToCartClick() {
    this.item = this.item + 1;
    this.showCounterButtons = true;
    this.decrementButtonDisable = false;
    if (this.addToCartClicked) {
      this.cartService.updateCart(this.product.id, this.item);
    } else {
      this.cartService.addToCart(this.product, this.item);
      this.addToCartClicked = true;
    }
  }

  handleRemoveClick() {
    this.showCounterButtons = false;
  }

  handleIncrementClick(id: number) {
    this.item = this.item + 1;
    this.decrementButtonDisable = false;
    this.cartService.updateCart(id, this.item);
  }

  handleDecrementClick(id: number) {
    if (this.item > 0) {
      this.item = this.item - 1;
    }

    if (this.item === 0) {
      this.decrementButtonDisable = true;
    }

    this.cartService.updateCart(id, this.item);
  }

  ngOnInit() {
    this.savedProductsInTheCart = this.cartService.productsInTheCart;
    this.getAddedItemsData();

    if (this.item === 0) {
      this.decrementButtonDisable = true;
    }
  }
}
