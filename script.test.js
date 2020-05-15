const googleSearch = require("./script");

const dbMock = [
  "dogs.com",
  "foods.com",
  "facebook.com",
  "myfavoritecats.com",
  "dog-pictures.com",
];

describe("googleSearch", () => {
  it("is searching google", () => {
    expect(googleSearch("dog", dbMock)).toEqual([
      "dogs.com",
      "dog-pictures.com",
    ]);
    expect(googleSearch("john", dbMock)).toEqual([]);
  });

  it("works with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
