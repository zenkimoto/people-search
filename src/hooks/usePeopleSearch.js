import { useState } from 'react';
import peopleSearch from '../services/people/people.service';

function usePeopleSearch() {
  const [people, setPeople] = useState([]);

  const searchPeople = async ({ searchName, searchAddress }) => {
    const results = await peopleSearch.search(searchName, searchAddress);
    setPeople(results.users ?? []);
  };

  return [people, searchPeople];
}

export default usePeopleSearch;
