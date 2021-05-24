import Results from '../results/results';
import Search from '../search/search';
import usePeopleSearch from '../../hooks/usePeopleSearch';

const Main = () => {
  const [people, searchPeople] = usePeopleSearch();

  return (
    <div className="grid grid-cols-2">
      <Search onSearch={(search) => searchPeople(search)} />
      <Results people={people} />
    </div>
  );
};

export default Main;
