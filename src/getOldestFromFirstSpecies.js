const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const object = employees.find((emp) => emp.id === id);
  const animals = object.responsibleFor[0];
  const animal = species.find((element) => element.id === animals);
  const names = animal.residents;
  const ordenado = names.sort((a, b) => b.age - a.age);
  return Object.values(ordenado[0]);
}

module.exports = getOldestFromFirstSpecies;
