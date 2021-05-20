import { render, cleanup, screen } from '@testing-library/react';
import ReactTestRenderer from 'react-test-renderer';
import Results from './results';

afterEach(() => {
  cleanup();
});

it('should not crash if no people are passed into Results component', async () => {
  // Render
  render(<Results />);
});

it('should render a list of people', async () => {
  const people = [
    { id: 1, name: 'John Smith' },
    { id: 2, name: 'Jane Doe' },
  ];

  render(<Results people={people} />);

  // Get list item by test id
  const listItem1 = screen.getByTestId('person-1');
  expect(listItem1).toBeInTheDocument();
  expect(listItem1).toHaveTextContent('John Smith');

  // Get list item by test id
  const listItem2 = screen.getByTestId('person-2');
  expect(listItem2).toBeInTheDocument();
  expect(listItem2).toHaveTextContent('Jane Doe');
});

it('should match snapshot', () => {
  // Example of a snapshot test
  const people = [
    { id: 1, name: 'John Smith' },
    { id: 2, name: 'Jane Doe' },
  ];

  // React Test Renderer library can be found here:
  // https://www.npmjs.com/package/react-test-renderer
  const tree = ReactTestRenderer.create(<Results people={people} />).toJSON();

  expect(tree).toMatchSnapshot();
});
