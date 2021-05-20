import peopleService from './people.service';
import fs from 'fs';
import util from 'util';

const mockFetchResponse = async () => {
  // Read JSON Response from File
  const readFile = util.promisify(fs.readFile);
  const file = await readFile(__dirname + '/people.service.test.data.json');

  // Mock Response
  fetch.mockResponse(file.toString(), {
    status: 200,
    statusText: 'Ok',
  });
};

beforeEach(() => {
  fetch.resetMocks();
});

it('should return a search result when searching for a name', async () => {
  await mockFetchResponse();

  const { ok, users } = await peopleService.search('weiss', '');

  expect(ok).toBeTruthy();
  expect(users.length).toEqual(1);
  expect(users[0].name).toEqual('Kurtis Weissnat');
});

it('should return search results when searching for an address', async () => {
  await mockFetchResponse();

  const { ok, users } = await peopleService.search('', 'kulas');

  expect(ok).toBeTruthy();
  expect(users.length).toEqual(1);
  expect(users[0].address.street).toEqual('Kulas Light');
});

it('should handle http response errors', async () => {
  fetch.mockResponse('', {
    status: 500,
    statusText: 'Internal Server Error',
  });

  const { ok, error } = await peopleService.search('weiss');

  expect(ok).toBeFalsy();
  expect(error).toEqual('Internal Server Error');
});
