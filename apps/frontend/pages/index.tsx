import { ProductListFeature } from '@app/backend/product-list';
import { ListFormFeature } from '@app/frontend/list-form';

export function Index(): JSX.Element {
  return (
    <div>
      <h1>Add new list</h1>
      <ListFormFeature />
      <h1>Lists</h1>
      <ProductListFeature />
    </div>
  );
}

export default Index;
