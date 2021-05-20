import { Field, ErrorMessage } from 'formik';

const SearchField = ({ fieldName, testId }) => {
  return (
    <>
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
          name={fieldName}
          type="text"
          placeholder="Search for a Person"
        />
      </div>
      <div className="text-red-700" data-testid={testId}>
        <ErrorMessage name={fieldName} />
      </div>
    </>
  );
};

export default SearchField;
