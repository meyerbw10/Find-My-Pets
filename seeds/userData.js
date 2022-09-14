const { User } = require('../models');

const userData = [
  {
    name: 'Buck',
    animal_id: 1,
    description:
      'Branches with pink apricot blossoms against a blue background.',
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
