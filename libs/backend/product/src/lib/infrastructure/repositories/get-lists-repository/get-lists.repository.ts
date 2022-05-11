import { Injectable } from '@nestjs/common';
import { GetListsRepositoryPort } from '../../../core/ports/get-lists-repository.port';
import axios from 'axios';
import { ProductListReadModel } from '../../../core/read-models/product-list.read-model';
import { IHttpGetListsResponse } from './get-lists-response.http-interface';
import { GetListsRepositoryMapper } from './get-lists-repository.mapper';

@Injectable()
export class GetListsRepository extends GetListsRepositoryPort {
  private readonly axiosInstance = axios.create({
    baseURL: 'https://external-api',
  });

  public async getLists(): Promise<ProductListReadModel[]> {
    const result = await this.axiosInstance.get<IHttpGetListsResponse>(
      '/lists'
    );

    return GetListsRepositoryMapper.parseHttpResponseToProductListReadModel(
      result.data
    );
  }
}
