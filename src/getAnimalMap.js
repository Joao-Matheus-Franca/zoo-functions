const data = require('../data/zoo_data');

const animalsNe = data.species.filter((element) => element.location === 'NE');
const animalsNw = data.species.filter((element) => element.location === 'NW');
const animalsSe = data.species.filter((element) => element.location === 'SE');
const animalsSw = data.species.filter((element) => element.location === 'SW');

const object = {
  NE: animalsNe,
  NW: animalsNw,
  SE: animalsSe,
  SW: animalsSw,
};

const noEntries = () => {
  object.NE = animalsNe.map((element) => element.name);
  object.NW = animalsNw.map((element) => element.name);
  object.SE = animalsSe.map((element) => element.name);
  object.SW = animalsSw.map((element) => element.name);
};

const withEntries = (options) => {
  object.NE = animalsNe.map((element) => ({
    [element.name]: element.residents.map((rs) => rs.name),
  }));
  object.NW = animalsNw.map((element) => ({
    [element.name]: element.residents.map((rs) => rs.name),
  }));
  object.SE = animalsSe.map((element) => ({
    [element.name]: element.residents.map((rs) => rs.name),
  }));
  object.SW = animalsSw.map((element) => ({
    [element.name]: element.residents.map((rs) => rs.name),
  }));
};

const withSort = () => {
  object.NE = animalsNe.map((element) => ({
    [element.name]: element.residents.map((rs) => rs.name)
      .sort(),
  }));
  object.NW = animalsNw.map((element) => ({
    [element.name]: element.residents.map((rs) => rs.name)
      .sort(),
  }));
  object.SE = animalsSe.map((element) => ({
    [element.name]: element.residents.map((rs) => rs.name)
      .sort(),
  }));
  object.SW = animalsSw.map((element) => ({
    [element.name]: element.residents.map((rs) => rs.name)
      .sort(),
  }));
};

const withSex = (options) => {
  object.NE = animalsNe.map((element) => ({
    [element.name]: element.residents.filter((resi) => resi.sex === options.sex)
      .map((rs) => rs.name),
  }));
  object.NW = animalsNw.map((element) => ({
    [element.name]: element.residents.filter((resi) => resi.sex === options.sex)
      .map((rs) => rs.name),
  }));
  object.SE = animalsSe.map((element) => ({
    [element.name]: element.residents.filter((resi) => resi.sex === options.sex)
      .map((rs) => rs.name),
  }));
  object.SW = animalsSw.map((element) => ({
    [element.name]: element.residents.filter((resi) => resi.sex === options.sex)
      .map((rs) => rs.name),
  }));
};

const withSexSorted = (options) => {
  object.NE = animalsNe.map((element) => ({
    [element.name]: element.residents.filter((resi) => resi.sex === options.sex)
      .map((rs) => rs.name).sort(),
  }));
  object.NW = animalsNw.map((element) => ({
    [element.name]: element.residents.filter((resi) => resi.sex === options.sex)
      .map((rs) => rs.name).sort(),
  }));
  object.SE = animalsSe.map((element) => ({
    [element.name]: element.residents.filter((resi) => resi.sex === options.sex)
      .map((rs) => rs.name).sort(),
  }));
  object.SW = animalsSw.map((element) => ({
    [element.name]: element.residents.filter((resi) => resi.sex === options.sex)
      .map((rs) => rs.name).sort(),
  }));
};

const verifyOptions = (options) => {
  if (options.includeNames && options.sex === undefined) {
    withEntries();
  }
  if (options.sorted && options.sex === undefined) {
    withSort();
  }
};

const verifyWithSex = (options) => {
  if (options.sorted === undefined) {
    withSex(options);
  }
  if (options.sorted) {
    withSexSorted(options);
  }
};

function getAnimalMap(options) {
  if (!options || options.includeNames === undefined) {
    noEntries();
    return object;
  }
  if (options.sex === undefined) {
    verifyOptions(options);
    return object;
  }
  if (options.sex) {
    verifyWithSex(options);
    return object;
  }
}

module.exports = getAnimalMap;
