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

  // Input (Example: query by element type) - i.e. First element with input type
  const inputName = container.querySelector('input');
  userEvent.type(inputName, 'John');

  // Example: Query by element + attribute
  const inputAddress = container.querySelector('input[name="searchAddress"]');
  userEvent.type(inputAddress, '123 Main St');

  // Search Button Click (Example: query by id)
  const button = container.querySelector('#searchButton');
  userEvent.click(button);

  // Validate callback
  await waitFor(() => {
    expect(handleSearch).toHaveBeenCalledWith({
      searchName: 'John',
      searchAddress: '123 Main St',
    });
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
  render(<Search onSearch={() => {}} />);

  // Get error message element by test id (Example: get element by data-testid)
  const errorMessageName = screen.getByTestId('errorMessageName');
  const errorMessageAddress = screen.getByTestId('errorMessageAddress');

  // Search Button Click (Example: get by text)
  const button = screen.getByText(/^Search$/i);
  userEvent.click(button);

  // Wait for Formik
  await waitFor(() => {
    expect(errorMessageName).toBeInTheDocument();
    expect(errorMessageName).toHaveTextContent('Required');

    expect(errorMessageAddress).toBeInTheDocument();
    expect(errorMessageAddress).toHaveTextContent('Required');
  });
});

it('should allow one or the other search field for the form to be valid', async () => {
  const handleSearch = jest.fn();

  const { container } = render(<Search onSearch={handleSearch} />);

  // Get error message element by test id (Example: get element by data-testid)
  const errorMessageName = screen.getByTestId('errorMessageName');
  const errorMessageAddress = screen.getByTestId('errorMessageAddress');

  const inputName = container.querySelector('input');
  userEvent.type(inputName, 'John');

  // Search Button Click (Example: get by text)
  const button = screen.getByText(/^Search$/i);
  userEvent.click(button);

  await waitFor(() => {
    // No error messages should be displayed
    expect(errorMessageName).toHaveTextContent('');
    expect(errorMessageAddress).toHaveTextContent('');

    // Callback handler should be called with name and
    // address should be empty.
    expect(handleSearch).toHaveBeenCalledWith({
      searchName: 'John',
      searchAddress: '',
    });
  });
});

// Example: Skipping a failing test
// https://stackoverflow.com/questions/48125230/skip-one-test-in-test-file-jest
// https://stackoverflow.com/questions/42176642/in-jest-how-can-i-make-a-test-fail
it.skip('failing test example', (done) => {
  done.fail('always fail');
});
