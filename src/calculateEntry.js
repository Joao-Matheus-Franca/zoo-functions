const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { child: 0,
    adult: 0,
    senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      result.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.keys === undefined) {
    return 0;
  }
  const result = countEntrants(entrants);
  const { adult, senior, child } = prices;
  let total = 0;
  total = (result.child * child) + (result.adult * adult) + (result.senior * senior);
  return total;
}

module.exports = { calculateEntry, countEntrants };
