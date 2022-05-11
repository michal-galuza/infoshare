import {
  IHttpGetProductLists,
  IHttpGetProductLists_ProductList,
} from '@app/shared/api-interface';
import { IProductList } from '../../../core/product-list';

export class ApiControllerMapper {
  static parseHttpRequestToProductsLists({
    data,
  }: IHttpGetProductLists): IProductList[] {
    return data.map((list) => this.parseHttpRequestToProductList(list));
  }

  private static parseHttpRequestToProductList(
    productList: IHttpGetProductLists_ProductList
  ): IProductList {
    return { ...productList, createdAt: new Date(productList.createdAt) };
  }
}
