import PropTypes from 'prop-types';

const Results = ({ people = [] }) => {
  return (
    <div className="p-8">
      <h1 className="text-lg">Results</h1>
      <ul className="list-disc">
        {people.map((p) => (
          <li data-testid={`person-${p.id}`} key={p.id}>
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Results.propTypes = {
  people: PropTypes.array,
};

export default Results;
