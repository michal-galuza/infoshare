import { IProductList } from './product-list';

export abstract class ApiControllerPort {
  public abstract getLists(): Promise<IProductList[]>;
}
