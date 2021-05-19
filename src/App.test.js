import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component correctly', () => {
  render(<App />);
  const textElement = screen.getByText(/Search/i);
  expect(textElement).toBeInTheDocument();
});
