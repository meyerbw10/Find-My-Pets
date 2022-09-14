const { User } = require('../models');

const userData = [
  {
    username: 'meyerbw10',
    email: "brad.meyer13@gmail.com",
    password:
      '1234567890',
  },
  {
    username: 'patback',
    email: "patback@test.com",
    password:
      '012345679',
  },
  {
    username: 'BillyGoat',
    email: "goat@hotmail.com",
    password:
      '0987654321',
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});
seedUsers(userData)
module.exports = seedUsers;
