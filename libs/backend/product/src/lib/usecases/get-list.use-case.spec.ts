import { GetListUseCase } from './get-list.use-case';
import { Test } from '@nestjs/testing';
import { GetListsRepositoryPort } from '../core/ports/get-lists-repository.port';
import { ProductListReadModel } from '../core/read-models/product-list.read-model';

const productListsMock: ProductListReadModel[] = [
  {
    createdAt: new Date(),
    id: 'id',
    products: [
      {
        count: 1,
        description: 'asd',
        id: '123',
        image: null,
        location: 'adsda',
        name: 'name',
        producer: 'producer',
        unit: 'szt.',
      },
    ],
  },
];

let getListUseCase: GetListUseCase;

beforeAll(async () => {
  const testModule = await Test.createTestingModule({
    providers: [
      GetListUseCase,
      {
        provide: GetListsRepositoryPort,
        useValue: {
          getLists: (): ProductListReadModel[] => {
            return productListsMock;
          },
        },
      },
    ],
  }).compile();

  getListUseCase = testModule.get(GetListUseCase);
});

describe('get list use case', () => {
  it('should return product lists', async () => {
    const result = await getListUseCase.getLists();

    expect(result[0]).toEqual(productListsMock[0]);
  });
});
