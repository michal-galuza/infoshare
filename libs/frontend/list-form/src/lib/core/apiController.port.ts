import { IProduct } from './product';

export abstract class ApiControllerPort {
  public abstract sendProductList(products: IProduct[]): Promise<boolean>;
}
