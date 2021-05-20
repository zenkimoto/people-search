import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  return (
    <div className="p-10">
      <h1 className="text-lg mb-4">People Search</h1>
      <Formik
        initialValues={{ searchTerm: '' }}
        validationSchema={Yup.object({
          searchTerm: Yup.string().required('Required'),
        })}
        onSubmit={(values, action) => {
          onSearch(values.searchTerm);
        }}
      >
        <Form>
          <div className="relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <Field
              className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
              name="searchTerm"
              type="text"
              placeholder="Search for a Person"
            />
          </div>
          <div className="text-red-700" data-testid="errorMessage">
            <ErrorMessage name="searchTerm" />
          </div>
          <button
            type="submit"
            id="searchButton"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
          >
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
