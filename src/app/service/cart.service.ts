import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iproduct } from '../models/Iproduct';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private productService: ProductService) {}

  totalProducts = this.productService.products;

  productsInTheCart: any[] = [];
  totalItemAddedInTheCart = new Subject();

  addToCart(product: Iproduct, totalItemsAdded: number) {
    let productNew = {
      productInfo: product,
      items: totalItemsAdded,
    };
    this.productsInTheCart.push(productNew);

    this.countTotalItemAddedInTheCart();
  }

  updateCart(currentId: number, newItem: number) {
    this.productsInTheCart = this.productsInTheCart.map((product) => {
      if (product.productInfo.id === currentId) {
        return { ...product, items: newItem };
      } else {
        return product;
      }
    });

    this.countTotalItemAddedInTheCart();
  }

  countTotalItemAddedInTheCart() {
    let totalItem = 0;
    this.productsInTheCart.map((product) => {
      totalItem = totalItem + product.items;
    });

    this.totalItemAddedInTheCart.next(totalItem);
  }

  calculateTotalPrice() {
    let totalPrice = 0;

    this.productsInTheCart.map((product) => {
      totalPrice = totalPrice + product.items * product.productInfo.price;
    });

    return totalPrice;
  }
}
