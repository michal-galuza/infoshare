import { createContext, FC, ReactNode } from 'react';
import { ApiControllerPort } from '../../core/apiController.port';
import { ApiHttpController } from './http/api.controller';

interface IApiProviderProps {
  children: ReactNode;
  value?: ApiControllerPort;
}

const apiController = ApiHttpController.getInstance();

export const ApiProviderCtx = createContext<ApiControllerPort>(apiController);

export const ApiProvider: FC<IApiProviderProps> = ({ children, value }) => {
  return (
    <ApiProviderCtx.Provider value={value || apiController}>
      {children}
    </ApiProviderCtx.Provider>
  );
};
