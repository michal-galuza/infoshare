import { render, screen } from '@testing-library/react';
import { ProductList } from './product-list';
import { getListsResponseMock } from '../../../../tests/mocks/get-lists-response.mock';
const setup = () => {
  return render(
    <ProductList {...getListsResponseMock.data[0]} createdAt={new Date()} />
  );
};

describe('Product list', () => {
  it('should return product list', () => {
    setup();
    expect(screen.getAllByRole('img').length).toEqual(
      getListsResponseMock.data[0].products.length / 2
    );

    expect(
      screen.getByText('randomProduct8random-list-id-0 | random-list-id-08', {
        exact: true,
      })
    ).toBeInTheDocument();
  });
});
