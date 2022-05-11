import { ApiProvider } from '../../api/api.provider';
import { ListForm } from './list-form';
import { render, screen, waitFor } from '@testing-library/react';
import { writeText } from '../../../../tests/write-text.test-helper';
import userEvent from '@testing-library/user-event';
import { mockServer } from '../../../../tests/mock-server';

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
  return render(
    <ApiProvider>
      <ListForm />
    </ApiProvider>
  );
};

describe('Renders tests', () => {
  it('should render form based on inital product values', () => {
    setup();
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('location')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('count')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('producer')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('image')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('description')).toBeInTheDocument();
  });

  it('should add new form section after button click', async () => {
    setup();

    await userEvent.click(screen.getByText('Add product'));
    await waitFor(() => {
      expect(screen.getAllByPlaceholderText('name').length).toEqual(2);
    });
  });
});

describe('Send data with test adapter', () => {
  it('should fill form and send data', async () => {
    setup();

    await writeText(screen.getByPlaceholderText('name'), 'new name');
    await writeText(screen.getByPlaceholderText('location'), 'new location');
    await writeText(screen.getByPlaceholderText('count'), '0');
    await writeText(screen.getByPlaceholderText('producer'), 'new producer');
    await writeText(
      screen.getByPlaceholderText('description'),
      'new description'
    );

    expect(screen.getByText('Submit')).not.toBeDisabled();

    await waitFor(async () => {
      userEvent.click(screen.getByText('Submit'));
    });
    await waitFor(async () => {
      expect(screen.getByText('Sended')).toBeInTheDocument();
    });
  });
});
