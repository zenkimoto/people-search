const PeopleService = {
  search: async (searchName = '', searchAddress = '') => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.status !== 200)
      return { ok: false, error: response.statusText };

    const users = await response.json();

    const name = searchName === '' ? null : searchName?.toLowerCase();
    const address = searchAddress === '' ? null : searchAddress?.toLowerCase();

    const filteredUsers = users.filter(
      (u) =>
        u.name.toLowerCase().includes(name) ||
        u.address.street.toLowerCase().includes(address)
    );

    return {
      ok: true,
      users: filteredUsers,
    };
  },
};

export default PeopleService;
