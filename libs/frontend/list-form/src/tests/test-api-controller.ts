import { ApiControllerPort } from '../lib/core/apiController.port';
import { IProduct } from '../lib/core/product';

export class TestApiController extends ApiControllerPort {
  private static instance: TestApiController;

  private statusToReturn = true;

  private products: IProduct[] = [];

  public static getInstance(): TestApiController {
    if (!TestApiController.instance) {
      TestApiController.instance = new TestApiController();
    }

    return TestApiController.instance;
  }

  public async sendProductList(products: IProduct[]): Promise<boolean> {
    this.products = products;

    return this.statusToReturn;
  }

  public setStatusToReturn(status: boolean) {
    this.statusToReturn = status;
  }

  public getProducts(): IProduct[] {
    return this.products;
  }
}
