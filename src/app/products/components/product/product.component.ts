import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  showFeedbacks = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(): void {
    console.log('The item was added to your shopping cart successfully!');
    this.cartService.addPurchase(this.product);
  }

  toggle(): void {
    this.showFeedbacks = !this.showFeedbacks;
  }
}
