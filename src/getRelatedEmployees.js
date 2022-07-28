const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((emp) => emp.managers[0] === id || emp.managers[1] === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const sub = employees.filter((emp) =>
    emp.managers[0] === managerId || emp.managers[1] === managerId);
  return sub.map((nome) => `${nome.firstName} ${nome.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
