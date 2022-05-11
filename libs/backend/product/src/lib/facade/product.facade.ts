import { Injectable } from '@nestjs/common';
import { GetListUseCase } from '../usecases/get-list.use-case';

@Injectable()
export class ProductFacade {
  constructor(private readonly getListUsecase: GetListUseCase) {}

  public async getLists() {
    return this.getListUsecase.getLists();
  }
}
