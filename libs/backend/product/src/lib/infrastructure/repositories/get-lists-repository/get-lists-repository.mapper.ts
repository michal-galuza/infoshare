import { ProductListReadModel } from '../../../core/read-models/product-list.read-model';
import { IHttpGetListsResponse } from './get-lists-response.http-interface';

export class GetListsRepositoryMapper {
  static parseHttpResponseToProductListReadModel(
    response: IHttpGetListsResponse
  ): ProductListReadModel[] {
    return response.data.map((list) => ({
      ...list,
      createdAt: new Date(list.createdAt),
    }));
  }
}
