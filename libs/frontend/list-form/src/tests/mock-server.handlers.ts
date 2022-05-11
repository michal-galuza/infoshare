import { IHttpSendList } from '@app/shared/api-interface';
import { rest } from 'msw';

const sendProductListHandler = rest.post<IHttpSendList>(
  'http://localhost:3001/list',
  (_req, res, ctx) => {
    return res(ctx.status(201));
  }
);

export const mockServerHandlers = [sendProductListHandler];
