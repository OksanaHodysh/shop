import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.enum';
import { Payment } from '../models/payment.enum';

const products = [
  new Product(
    'skirt',
    'a blue cotton checked skirt',
    99.99,
    Category.Clothes,
    'Inspired Artist',
    ['The skirt looks brilliant.', 'I love the skirt, it is awesome!'],
    [Payment.MasterCard, Payment.Visa, Payment.PayPal],
    true,
    true
  ),
  new Product(
    'sofa',
    'a green leather modular sofa',
    999.99,
    Category.Furniture,
    'Inspired Carpenter',
    ['The sofa is extremely comfortable and you can create your own combinations.'],
    [Payment.MasterCard, Payment.Visa]
  )
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return products;
  }
}
