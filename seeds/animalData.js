const { animal } = require('../models');

const animalData = [
  {
    name: 'Buck',
    animal_id: 1,
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
];

const seedAnimal = () => Animal.bulkCreate(animalData);

module.exports = seedAnimal;
