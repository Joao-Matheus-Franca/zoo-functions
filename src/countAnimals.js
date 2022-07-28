const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const result = {};
    species.forEach((sp) => {
      const { name, residents } = sp;
      result[name] = residents.length;
    });
    return result;
  }
  const objeto = (species.find((sp) => sp.name === animal.specie)).residents;
  if (animal.sex === undefined) {
    return objeto.length;
  }
  if (animal.sex !== undefined) {
    const number = objeto.filter((sex) => sex.sex === animal.sex);
    return number.length;
  }
}

module.exports = countAnimals;
