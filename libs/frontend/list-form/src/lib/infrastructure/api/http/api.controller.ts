import { ApiControllerPort } from '../../../core/apiController.port';
import { IProduct } from '../../../core/product';
import axios from 'axios';
import { ApiControllerMapper } from './api-controller.mapper';

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

  public async sendProductList(products: IProduct[]): Promise<boolean> {
    try {
      const result = await this.axiosInstance.post(
        '/list',
        ApiControllerMapper.parseProductsToHttpRequest(products)
      );

      return result.status === 201;
    } catch (e) {
      return false;
    }
  }
}
// TODO: Testy unit z custom HOC
// TODO: Test unit z MSW z zwykłym HOC-em
