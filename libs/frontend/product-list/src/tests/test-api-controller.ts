import { ApiControllerPort } from '../lib/core/apiController.port';
import { IProductList } from '../lib/core/product-list';
import { ApiControllerMapper } from '../lib/infrastructure/api/http/api-controller.mapper';
import { createListProducts } from './mocks/list-products.mock';

export class TestApiController extends ApiControllerPort {
  private static instance: TestApiController;

  public static getInstance(): TestApiController {
    if (!TestApiController.instance) {
      TestApiController.instance = new TestApiController();
    }

    return TestApiController.instance;
  }

  public async getLists(): Promise<IProductList[]> {
    return ApiControllerMapper.parseHttpRequestToProductsList(
      createListProducts()
    );
  }
}
