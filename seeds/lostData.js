const { Lost } = require('../models/Lost');

const lostData = [
  {
    id:3,
    name: 'Mia',
    weight: '30',
    breed: 'Australian Sheppard',
    sex: 'male',
    fixed: true,
    color: 'brown',
    dateLost: 1900-08-20,

  },
];

const seedLost = () => Lost.bulkCreate(lostData);

module.exports = seedLost;