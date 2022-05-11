import useSWR from 'swr';
import { ApiProvider } from '../api/api.provider';
import { ProductList } from '../ui/product-list/product-list';
import { ApiControllerPort } from '../../core/apiController.port';
interface IProductListFeatureProps {
  customApiProvider?: ApiControllerPort;
}

export const ProductListFeature = ({
  customApiProvider,
}: IProductListFeatureProps): JSX.Element => {
  const apiProvider = customApiProvider || ApiProvider.getInstance();

  const fetchKey = 'PRODUCT_LIST';
  const { data, error } = useSWR(fetchKey, () => apiProvider.getLists());

  if (error) {
    return (
      <div>
        <p>{String(error)}</p>
      </div>
    );
  }

  if (data) {
    return (
      <>
        {data.map((list) => (
          <ProductList key={list.id} {...list} />
        ))}
      </>
    );
  }

  return <p>Loading</p>;
};
