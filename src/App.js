import { useState } from 'react';
import Results from './components/results/results';
import Search from './components/search/search';
import peopleSearch from './services/people.service';

function App() {
  const [people, setPeople] = useState([]);

  const searchPeople = async (term) => {
    const results = await peopleSearch.search(term);
    setPeople(results.users ?? []);
  };

  return (
    <div className="grid grid-cols-2">
      <Search onSearch={(searchTerm) => searchPeople(searchTerm)} />
      <Results people={people} />
    </div>
  );
}

export default App;
