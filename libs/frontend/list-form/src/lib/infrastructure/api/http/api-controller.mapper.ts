import { IProduct } from '../../../core/product';
import { IHttpSendList } from '@app/shared/api-interface';

export class ApiControllerMapper {
  static parseProductsToHttpRequest(products: IProduct[]): IHttpSendList {
    return { data: products };
  }
}
