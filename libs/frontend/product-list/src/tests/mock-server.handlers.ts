import { IHttpGetProductLists } from '@app/shared/api-interface';
import { rest } from 'msw';
import { getListsResponseMock } from './mocks/get-lists-response.mock';

const sendProductListHandler = rest.get<never, never, IHttpGetProductLists>(
  'http://localhost:3001/list',
  (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(getListsResponseMock));
  }
);

export const mockServerHandlers = [sendProductListHandler];
