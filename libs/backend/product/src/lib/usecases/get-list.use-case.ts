import { Injectable } from '@nestjs/common';
import { GetListsRepositoryPort } from '../core/ports/get-lists-repository.port';
import { ProductListReadModel } from '../core/read-models/product-list.read-model';

@Injectable()
export class GetListUseCase {
  constructor(private readonly getListsRepository: GetListsRepositoryPort) {}

  public async getLists(): Promise<ProductListReadModel[]> {
    return this.getListsRepository.getLists();
  }
}
