import {
  IHttpGetProductLists,
  IHttpGetProductLists_ProductList,
} from '@app/shared/api-interface';
import { ProductListReadModel } from '../../../../core/read-models/product-list.read-model';

export class GetListsResponseDto implements IHttpGetProductLists {
  data: IHttpGetProductLists_ProductList[];
  constructor(data: ProductListReadModel[]) {
    this.data = data.map((list) => ({
      ...list,
      createdAt: list.createdAt.toISOString(),
    }));
  }
}
