import { render, cleanup } from '@testing-library/react';
import { Formik, Form } from 'formik';
import SearchField from './search-field';

afterEach(() => {
  cleanup();
});

it('should render an input with a firstName attribute', async () => {
  // Note: Testing a Field requires a Formik context
  const { container } = render(
    <Formik>
      <Form>
        <SearchField fieldName="firstName" testId="errorMessage" />
      </Form>
    </Formik>
  );

  const firstNameElement = container.querySelector('input[name="firstName"]');

  expect(firstNameElement).not.toBeNull();
});
