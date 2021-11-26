const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const checkIdade = data.species
    .find((nomeAnimal) => nomeAnimal.name === animal)
    .residents.map((idade) => (idade.age > age))
    .filter((elemento, index, arr) => index === arr.indexOf(elemento));
  return checkIdade;
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
