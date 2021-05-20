import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './search';

afterEach(() => {
  cleanup();
});

it('should call the onSearch handler when user clicks search', async () => {
  // Example testing Formik here: https://testing-library.com/docs/example-react-formik/

  // Setup Callback
  const handleSearch = jest.fn();

  // Render
  const { container } = render(<Search onSearch={handleSearch} />);

  // Input (Example: query by element type)
  const input = container.querySelector('input');
  userEvent.type(input, 'john');

  // Search Button Click (Example: query by id)
  const button = container.querySelector('#searchButton');
  userEvent.click(button);

  // Validate callback
  await waitFor(() => {
    expect(handleSearch).toHaveBeenCalledWith({ searchName: 'john' });
  });
});

it('should not call the onSearch handler when form is not valid', async () => {
  const handleSearch = jest.fn();
  const { container } = render(<Search onSearch={handleSearch} />);

  // Search Button Click (Example: query by id)
  const button = container.querySelector('#searchButton');
  userEvent.click(button);

  // Validate callback
  await waitFor(() => {
    expect(handleSearch).not.toHaveBeenCalled();
  });
});

it('should display an error message when the form is not valid', async () => {
  // Example: Using screen instead of container.  (Using screen is recommended by Kent C. Dodds)
  render(<Search />);

  // Get error message element by test id (Example: get element by data-testid)
  const errorMessage = screen.getByTestId('errorMessage');

  // Search Button Click (Example: get by text)
  const button = screen.getByText(/^Search$/i);
  userEvent.click(button);

  // Wait for Formik
  await waitFor(() => {
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Required');
  });
});
