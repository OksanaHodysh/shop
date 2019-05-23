import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  purchases: Array<Product> = [];

  constructor() { }

  getPurchases(): Array<Product> {
    return this.purchases;
  }

  addPurchase(item: Product): void {
    this.purchases.push(item);
  }
}
