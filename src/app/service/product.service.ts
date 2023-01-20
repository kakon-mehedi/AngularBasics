import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    {
      id: 1,
      productName: 'Apple',
      productPhotoUrl: 'assets/images/products/apple.jpeg',
      price: 200,
      quantity: 20,
    },

    {
      id: 2,
      productName: 'Avocado',
      productPhotoUrl: 'assets/images/products/avocado.jpeg',
      price: 250,
      quantity: 10,
    },

    {
      id: 3,
      productName: 'Banana',
      productPhotoUrl: 'assets/images/products/banana.jpeg',
      price: 100,
      quantity: 10,
    },

    {
      id: 4,
      productName: 'Cherry',
      productPhotoUrl: 'assets/images/products/cherry.jpeg',
      price: 200,
      quantity: 7,
    },

    {
      id: 5,
      productName: 'Grasp',
      productPhotoUrl: 'assets/images/products/grasp.jpeg',
      price: 150,
      quantity: 13,
    },

    {
      id: 6,
      productName: 'Lemon',
      productPhotoUrl: 'assets/images/products/lemon.jpeg',
      price: 210,
      quantity: 9,
    },

    {
      id: 7,
      productName: 'Mango',
      productPhotoUrl: 'assets/images/products/mango.jpeg',
      price: 250,
      quantity: 20,
    },

    {
      id: 8,
      productName: 'Orange',
      productPhotoUrl: 'assets/images/products/orange.jpeg',
      price: 200,
      quantity: 40,
    },

    {
      id: 9,
      productName: 'Water Milon',
      productPhotoUrl: 'assets/images/products/watermilon.jpeg',
      price: 110,
      quantity: 10,
    },
  ];
}
