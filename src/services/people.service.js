const PeopleService = {
  search: async (searchTerm) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();

    return users.filter((u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
};

export default PeopleService;
