import { IHttpGetProductLists } from '@app/shared/api-interface';
import { Controller, Get } from '@nestjs/common';
import { ProductFacade } from '../../../facade/product.facade';
import { GetListsResponseDto } from './response-dto/get-lists.response-dto';

@Controller('/list')
export class ProductController {
  constructor(private readonly productFacade: ProductFacade) {}

  @Get('/')
  public async getLists(): Promise<IHttpGetProductLists> {
    const result = await this.productFacade.getLists();
    return new GetListsResponseDto(result);
  }
}
