const { User } = require('../models');

const userData = [
  {
    username: 'meyerbw10',
    email: "brad.meyer13@gmail.com",
    password:
      'brad4147',
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});
seedUsers(userData)
module.exports = seedUsers;
