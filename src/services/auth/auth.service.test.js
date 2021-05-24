import authService from './auth.service';

// Testing Asynchronous Code
// https://jestjs.io/docs/asynchronous

it('should login successfully', async () => {
  // Test promise fulfilled
  const result = await authService.login('user', 'password');
  expect(result).toEqual({ user: { id: 1, username: 'user' } });

  // Alternate Syntax
  await expect(authService.login('user', 'password')).resolves.toEqual({
    user: { id: 1, username: 'user' },
  });
});

it('should reject invalid login', async () => {
  // Test promise rejection
  await expect(authService.login('asdf', 'asdf')).rejects.toEqual({
    error: 'Invalid username and/or password.',
  });
});
