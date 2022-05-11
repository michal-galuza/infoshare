import { IProductList } from '../../../core/product-list';
import { Product } from '../product/product';

interface IProductListProps extends IProductList {}

export const ProductList = ({
  products,
  id,
  createdAt,
}: IProductListProps): JSX.Element => {
  return (
    <div>
      <h1>Product list ({createdAt.toISOString()})</h1>
      {products.map((product, index) => (
        <Product key={product.id + index + id} data={product} />
      ))}
    </div>
  );
};
