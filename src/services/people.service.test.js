import peopleService from './people.service';
import fs from 'fs';
import util from 'util';

const mockFetchResponse = async () => {
  const readFile = util.promisify(fs.readFile);
  const file = await readFile(__dirname + '/people.service.test.data.json');

  fetch.mockResponseOnce(file.toString());
};

beforeEach(() => {
  fetch.resetMocks();
  mockFetchResponse();
});

it('should render a search field', async () => {
  await mockFetchResponse();

  let result = await peopleService.search('weiss');

  expect(result.length).toEqual(1);
  expect(result[0].name).toEqual('Kurtis Weissnat');
});
