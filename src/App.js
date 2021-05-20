import { useState } from 'react';
import Results from './components/results/results';
import Search from './components/search/search';
import peopleSearch from './services/people.service';

function App() {
  const [people, setPeople] = useState([]);

  const searchPeople = async ({ searchName }) => {
    const results = await peopleSearch.search(searchName);
    setPeople(results.users ?? []);
  };

  return (
    <div className="grid grid-cols-2">
      <Search onSearch={(search) => searchPeople(search)} />
      <Results people={people} />
    </div>
  );
}

export default App;
