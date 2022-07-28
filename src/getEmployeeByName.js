const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const nomeArray = employeeName.split(' ');
  const novo = employees.filter((emp) =>
    emp.firstName === nomeArray[0] || emp.lastName === nomeArray[0]);
  return novo[0];
}

module.exports = getEmployeeByName;
