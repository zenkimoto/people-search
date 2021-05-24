const AuthService = {
  login: async (username, password) => {
    // Simulate login
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          resolve({ user: { id: 1, username } });
        } else {
          reject({ error: 'Invalid username and/or password.' });
        }
      }, 300);
    });
  },
};

export default AuthService;
