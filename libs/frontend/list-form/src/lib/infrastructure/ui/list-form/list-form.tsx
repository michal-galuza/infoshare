import { IProduct } from '../../../core/product';
import { Formik, Form, FieldArray } from 'formik';
import { useListForm } from './useListForm';
import { ListFormItemProduct } from '../list-form-item/list-form-item-product';
import { useCallback, useContext, useState } from 'react';
import { ApiProviderCtx } from '../../api/api.provider';

export const ListForm = (): JSX.Element => {
  const [sended, setSended] = useState<boolean>(false);
  const apiProvider = useContext(ApiProviderCtx);
  const { initialProduct } = useListForm();

  const handleSubmit = useCallback(
    async ({ products }: { products: IProduct[] }) => {
      const result = await apiProvider.sendProductList(products);
      setSended(result);
    },
    [apiProvider]
  );

  return (
    <Formik
      initialValues={{ products: [initialProduct] }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          {sended && <p>Sended</p>}
          <FieldArray
            name="products"
            render={(arrayHelpers) => (
              <>
                {values.products.map((_product, index) => (
                  <ListFormItemProduct
                    key={`products[${index}]`}
                    index={index}
                  />
                ))}
                <button
                  type="button"
                  onClick={() =>
                    arrayHelpers.push({
                      ...initialProduct,
                      index: values.products.length,
                    })
                  }
                >
                  Add product
                </button>
              </>
            )}
          ></FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
