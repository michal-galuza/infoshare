import { Module } from '@nestjs/common';
import { GetListsRepositoryPort } from './core/ports/get-lists-repository.port';
import { ProductFacade } from './facade/product.facade';
import { GetListsRepository } from './infrastructure/repositories/get-lists-repository/get-lists.repository';
import { ProductController } from './infrastructure/ui/http/product.controller';
import { GetListUseCase } from './usecases/get-list.use-case';

@Module({
  controllers: [ProductController],
  providers: [
    {
      provide: GetListsRepositoryPort,
      useClass: GetListsRepository,
    },
    ProductFacade,
    GetListUseCase,
  ],
  exports: [],
})
export class BackendProductModule {}
