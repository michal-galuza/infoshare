import { ApiControllerPort } from '../../../core/apiController.port';
import axios from 'axios';
import { ApiControllerMapper } from './api-controller.mapper';
import { IProductList } from '../../../core/product-list';
import { IHttpGetProductLists } from '@app/shared/api-interface';

export class ApiHttpController extends ApiControllerPort {
  private static instance: ApiHttpController;

  private axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
  });

  public static getInstance(): ApiHttpController {
    if (!ApiHttpController.instance) {
      ApiHttpController.instance = new ApiHttpController();
    }

    return ApiHttpController.instance;
  }
  public async getLists(): Promise<IProductList[]> {
    const result = await this.axiosInstance.get<IHttpGetProductLists>('/list');

    return ApiControllerMapper.parseHttpRequestToProductsLists(result.data);
  }
}
