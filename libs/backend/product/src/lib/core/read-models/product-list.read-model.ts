import { ProductReadModel } from './product.read-model';

export class ProductListReadModel {
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly products: ProductReadModel[];

  constructor(data: ProductListReadModel) {
    this.id = data.id;
    this.createdAt = data.createdAt;
    this.products = data.products;
  }
}
