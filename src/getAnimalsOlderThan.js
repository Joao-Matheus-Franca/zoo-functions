const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = species.filter((specie) => specie.name === animal);
  const elementos = animais.map((element) => element.residents);
  const [novo] = elementos;
  return novo.every((idades) => idades.age >= age);
}

module.exports = getAnimalsOlderThan;
