import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './search';

afterEach(cleanup);

it('should call the onSearch handler when user clicks search', async () => {
  // Example from here: https://testing-library.com/docs/example-react-formik/

  // Setup Callback
  const handleSearch = jest.fn();

  // Render
  const { container } = render(<Search onSearch={handleSearch} />);

  // Input
  const input = container.querySelector('input');
  userEvent.type(input, 'john');

  // Search Button Click
  const button = container.querySelector('button');
  userEvent.click(button);

  // Validate callback
  await waitFor(() => {
    expect(handleSearch).toHaveBeenCalledWith('john');
  });
});

it('should not call the onSearch handler when form is not valid', async () => {
  const handleSearch = jest.fn();
  const { container } = render(<Search onSearch={handleSearch} />);

  // Search Button Click
  const button = container.querySelector('button');
  userEvent.click(button);

  await waitFor(() => {
    expect(handleSearch).not.toHaveBeenCalled();
  });
});
