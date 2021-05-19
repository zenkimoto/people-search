const Results = ({ people }) => {
  return (
    <div className="p-8">
      Results
      <ul>
        {people.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
