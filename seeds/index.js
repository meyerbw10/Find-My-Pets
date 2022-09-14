const sequelize = require('../config/connection');
const seedAnimal = require('./animalData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedAnimal();

  process.exit(0);
};

seedAll();
