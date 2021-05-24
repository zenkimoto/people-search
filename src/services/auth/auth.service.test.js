import AuthService from './auth.service';

// Testing Asynchronous Code
// https://jestjs.io/docs/asynchronous

let authService;
let setAuthenticated;

beforeEach(() => {
  setAuthenticated = jest.fn();
  authService = new AuthService(setAuthenticated);
});

afterEach(() => {
  setAuthenticated = null;
  authService = null;
});

it('should login successfully', async () => {
  // Test promise fulfilled
  const result = await authService.login('user', 'password');
  expect(result).toEqual({ user: { id: 1, username: 'user' } });

  // Alternate Syntax (Same as above)
  await expect(authService.login('user', 'password')).resolves.toEqual({
    user: { id: 1, username: 'user' },
  });

  expect(setAuthenticated).toBeCalledWith(true);
});

it('should reject invalid login', async () => {
  // Test promise rejection
  await expect(authService.login('asdf', 'asdf')).rejects.toEqual({
    error: 'Invalid username and/or password.',
  });

  expect(setAuthenticated).toBeCalledWith(false);
});
