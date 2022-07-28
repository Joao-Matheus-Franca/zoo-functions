const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  if (ids.length === 1) {
    const unica = species.find((element) => element.id === ids[0]);
    return [unica];
  }
  return species.filter((element, index) => element.id === ids[index]);
}

module.exports = getSpeciesByIds;
