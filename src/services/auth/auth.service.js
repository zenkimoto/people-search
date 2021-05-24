class AuthService {
  constructor(setAuthenticated) {
    this.setAuthenticated = setAuthenticated;
  }

  async login(username, password) {
    // Simulate login
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          this.setAuthenticated(true);
          resolve({ user: { id: 1, username } });
        } else {
          this.setAuthenticated(false);
          reject({ error: 'Invalid username and/or password.' });
        }
      }, 300);
    });
  }
}

export default AuthService;
