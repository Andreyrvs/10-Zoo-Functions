const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const achaId = data.employees.find((eu) => {
    const manager = data.employees[1].managers;
    if (eu.id === id) {
      return true;
    } return false;
  });

  return achaId;
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

// console.log();

module.exports = { isManager, getRelatedEmployees };
