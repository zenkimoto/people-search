import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import SearchField from '../search-field/search-field';

const Search = ({ onSearch }) => {
  return (
    <div className="p-10">
      <h1 className="text-lg mb-4">People Search</h1>
      <Formik
        initialValues={{ searchName: '' }}
        validationSchema={Yup.object({
          searchName: Yup.string().required('Required'),
        })}
        onSubmit={(values, action) => onSearch(values)}
      >
        <Form>
          <SearchField fieldName="searchName" testId="errorMessage" />
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
