import { ProductListReadModel } from '../read-models/product-list.read-model';

export abstract class GetListsRepositoryPort {
  public abstract getLists(): Promise<ProductListReadModel[]>;
}
