import { ApiProvider } from './api/api.provider';
import { ListForm } from './ui/list-form/list-form';
export const ListFormFeature = (): JSX.Element => {
  return (
    <ApiProvider>
      <ListForm />
    </ApiProvider>
  );
};
