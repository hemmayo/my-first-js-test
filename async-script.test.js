const fetch = require("node-fetch");
const { getPeople, getPeoplePromise } = require("./async-script");

const mockFetch = jest.fn().mockReturnValue(
  Promise.resolve({
    json: () => Promise.resolve({ count: 82, results: [0, 1, 2, 3, 4, 5, 6] }),
  })
);

it("calls swapi to get people", () => {
  expect.assertions(1);

  return getPeople(mockFetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it("calls swapi to get people with a promise", () => {
  expect.assertions(2);

  return getPeoplePromise(mockFetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it("getPeople returns count and results", () => {
  expect.assertions(4);
  return getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(3);
    expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");

    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
