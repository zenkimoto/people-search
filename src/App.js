import Results from './components/results/results';
import Search from './components/search/search';
import usePeopleSearch from './hooks/usePeopleSearch';

function App() {
  const [people, searchPeople] = usePeopleSearch();

  return (
    <div className="grid grid-cols-2">
      <Search onSearch={(search) => searchPeople(search)} />
      <Results people={people} />
    </div>
  );
}

export default App;
