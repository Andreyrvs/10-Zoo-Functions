const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const acha = data.employees.filter((a) => a.managers === id);

  return acha;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log();

module.exports = { isManager, getRelatedEmployees };
