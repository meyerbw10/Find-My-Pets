const sequelize = require('../config/connection');
const seedAnimal = require('./animalData');
const seedUsers = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedAnimal();

  process.exit(0);
};

seedAll();
