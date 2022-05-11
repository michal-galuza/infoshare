import { ListFormItemField } from './list-form-item-field';
interface IProductFormProps {
  index: number;
}

export const ListFormItemProduct = ({
  index,
}: IProductFormProps): JSX.Element => {
  return (
    <div>
      <p>{index + 1}. Product</p>
      <ListFormItemField name={`products[${index}].name`} placeholder="name" />
      <ListFormItemField
        name={`products[${index}].location`}
        placeholder="location"
      />
      <ListFormItemField
        name={`products[${index}].count`}
        placeholder="count"
        type="number"
      />
      <ListFormItemField name={`products[${index}].unit`} placeholder="unit" />
      <ListFormItemField
        name={`products[${index}].producer`}
        placeholder="producer"
      />
      <ListFormItemField
        name={`products[${index}].image`}
        placeholder="image"
        type="file"
      />
      <ListFormItemField
        name={`products[${index}].description`}
        placeholder="description"
        as="textarea"
      />
    </div>
  );
};
