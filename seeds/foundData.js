const { Found } = require('../models/Found');

const foundData = [
  {
    id:3,
    name: 'unknown',
    weight: '100',
    breed: 'Golden Retriever',
    sex: 'male',
    fixed: true,
    color: 'gold',
    city: 'Pickerington',
    dateLost: 1900-08-20,

  },
];

const seedFound = () => Found.bulkCreate(foundData);

module.exports = seedFound;