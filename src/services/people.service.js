const PeopleService = {
  search: async (searchTerm) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.status !== 200)
      return { ok: false, error: response.statusText };

    let users = await response.json();

    return {
      ok: true,
      users: users.filter((u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    };
  },
};

export default PeopleService;
