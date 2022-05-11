import { IProduct } from './product';

export interface IProductList {
  products: IProduct[];
  id: string;
  createdAt: Date;
}
