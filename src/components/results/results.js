const Results = ({ people }) => {
  return (
    <div className="p-8">
      <h1 className="text-lg">Results</h1>
      <ul className="list-disc">
        {people.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
