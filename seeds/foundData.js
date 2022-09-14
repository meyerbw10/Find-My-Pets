const { Found } = require('../models');

const foundData = [
  {
    name: 'Buck',
    animal_id: 1,
    description:
      'Branches with pink apricot blossoms against a blue background.',
  }
];

const seedFound = () => Gallery.bulkCreate(foundData);

module.exports = seedFound;
