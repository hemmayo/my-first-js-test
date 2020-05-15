const googleDatabase = [
  "cats.com",
  "billboard.com",
  "fliqpay.com",
  "foods.com",
  "facebook.com",
  "myfavoritecats.com",
  "cat-pictures.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => website.includes(searchInput));

  return matches.slice(0, 3);
};

module.exports = googleSearch;
