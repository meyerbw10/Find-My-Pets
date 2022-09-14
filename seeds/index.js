const sequelize = require('../config/connection');
const seedLost = require('./lostData');
const seedFound = require('./foundData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLost();

  await seedFound();

  process.exit(0);
};

seedAll();
