const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui

  const [species] = data.species;

  return console.log(species);
}

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getSpeciesByIds;
