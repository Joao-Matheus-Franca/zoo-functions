const data = require('../data/zoo_data');

let result = {};

const totalResult = () => {
  result = data.employees.map((element) => ({
    id: `${element.id}`,
    fullName: `${element.firstName} ${element.lastName}`,
    species: data.species.filter((animal) => element.responsibleFor.includes(animal.id))
      .map((beast) => beast.name),
    locations: data.species.filter((animal) => element.responsibleFor.includes(animal.id))
      .map((beast) => beast.location),
  }));
};

const resultName = (object) => {
  const employee = data.employees
    .filter((element) => element.firstName === object.name || element.lastName === object.name);
  result = employee.map((emp) => ({
    id: `${emp.id}`,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: data.species.filter((animal) => emp.responsibleFor.includes(animal.id))
      .map((beast) => beast.name),
    locations: data.species.filter((animal) => emp.responsibleFor.includes(animal.id))
      .map((beast) => beast.location),
  }));
};

const resultId = (object) => {
  const employee = data.employees
    .filter((element) => element.id === object.id);
  result = employee.map((e) => ({
    id: `${e.id}`,
    fullName: `${e.firstName} ${e.lastName}`,
    species: data.species.filter((animal) => e.responsibleFor.includes(animal.id))
      .map((beast) => beast.name),
    locations: data.species.filter((animal) => e.responsibleFor.includes(animal.id))
      .map((beast) => beast.location),
  }));
};

const ids = data.employees.map((element) => element.id);
const verifyId = (object) => ids.includes(object.id);

const firstName = data.employees.map((element) => element.firstName);
const lastName = data.employees.map((element) => element.lastName);
const verifyName = (object) => firstName.includes(object.name) || lastName.includes(object.name);

function getEmployeesCoverage(object) {
  if (!object) {
    totalResult();
    return result;
  }
  if (verifyName(object)) {
    resultName(object);
    return result[0];
  }
  if (verifyId(object)) {
    resultId(object);
    return result[0];
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
