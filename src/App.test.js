import { render, cleanup, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('should render a search field', () => {
  render(<App />);

  const searchInput = screen.queryByPlaceholderText('Search for a Person');
  expect(searchInput).toBeInTheDocument();
});

it('should render a search button', () => {
  render(<App />);

  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.nodeName).toEqual('BUTTON');
});
