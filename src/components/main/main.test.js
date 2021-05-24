import { render, cleanup, screen } from '@testing-library/react';
import Main from './Main';

afterEach(cleanup);

it('should render the search person field', () => {
  render(<Main />);

  const searchInput = screen.queryByPlaceholderText('Search for a Person');
  expect(searchInput).toBeInTheDocument();
});

it('should render the search address field', () => {
  render(<Main />);

  const searchInput = screen.queryByPlaceholderText('Search for an Address');
  expect(searchInput).toBeInTheDocument();
});

it('should render a search button', () => {
  render(<Main />);

  const buttonElement = screen.getByText(/^Search$/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.nodeName).toEqual('BUTTON');
});

it('should render the search results section', () => {
  render(<Main />);

  const resultsElement = screen.getByText('Results');
  const listElement = resultsElement.nextElementSibling;

  expect(resultsElement).toBeInTheDocument();
  expect(listElement.nodeName).toEqual('UL');
});
