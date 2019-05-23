import { Category } from './category.enum';
import { Payment } from './payment.enum';

interface ProductItem {
  name: string;
  description: string;
  price: number;
  category: Category;
  seller: string;
  feedbacks: Array<string>;
  payments: Array<Payment>;
  isAvailable: boolean;
  isTopRated: boolean;
}

export class Product implements ProductItem {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public seller: string,
    public feedbacks: Array<string>,
    public payments: Array<Payment>,
    public isAvailable = false,
    public isTopRated = false
  ) {}
}
