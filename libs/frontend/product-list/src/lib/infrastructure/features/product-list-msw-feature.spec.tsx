import { render, screen, waitFor } from '@testing-library/react';
import { mockServer } from '../../../tests/mock-server';
//import { getListsResponseMock } from '../../../tests/mocks/get-lists-response.mock';
import { ProductListFeature } from './product-list.feature';
const mockServerInstance = mockServer();

beforeAll(() => {
  mockServerInstance.listen();
});

afterEach(() => {
  mockServerInstance.resetHandlers();
});

afterAll(() => {
  mockServerInstance.close();
});

const setup = () => {
  return render(<ProductListFeature />);
};

describe('product lists', () => {
  it('should return product lists', async () => {
    setup();
    await waitFor(() => {
      expect(
        screen.getByText(/randomProduct0random-list-id-0/)
      ).toBeInTheDocument();
    });
  });
});
