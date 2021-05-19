import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component correctly', () => {
  render(<App />);
  const searchInput = screen.queryByPlaceholderText('Search for a Person');
  expect(searchInput).toBeInTheDocument();

  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.nodeName).toEqual('BUTTON');
});
