const { lost } = require('../models');

const lostData = [
  {
    name: 'Buck',
    animal_id: 1,
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
];

const seedLost = () => Lost.bulkCreate(lostData);

module.exports = seedLost;
