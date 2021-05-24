const AuthService = {
  isAuthenticated: false,
  login: async (username, password) => {
    // Simulate login
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          AuthService.isAuthenticated = true;
          resolve({ user: { id: 1, username } });
        } else {
          AuthService.isAuthenticated = false;
          reject({ error: 'Invalid username and/or password.' });
        }
      }, 300);
    });
  },
};

export default AuthService;
