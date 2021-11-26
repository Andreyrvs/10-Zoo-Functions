const data = require('../data/zoo_data');

function getSpeciesByIds(ids, ...test) {
  // seu código aqui
  let vazio = [];
  vazio = data.species.filter((el) => el.id === ids || el.id === test);

  return vazio;
}

console.log(
  getSpeciesByIds(
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    'e8481c1d-42ea-4610-8e11-1752cfc05a46',
  ),
);

module.exports = getSpeciesByIds;
