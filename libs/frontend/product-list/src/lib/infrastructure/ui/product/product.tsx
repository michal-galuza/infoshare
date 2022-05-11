import { IProduct } from '../../../core/product';

interface IProductProps {
  data: IProduct;
}

export const Product = ({ data }: IProductProps): JSX.Element => {
  return (
    <div>
      <p>
        {data.name} | {data.producer}
      </p>
      <p>{data.location}</p>
      <p>{data.description}</p>
      <p>
        {data.count} / {data.unit}
      </p>
      {data.image && <img src={data.image} alt={data.name} />}
    </div>
  );
};
