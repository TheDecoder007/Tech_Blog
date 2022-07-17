const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'TechGuy',
    password: 'password123'
  },
  {
    username: 'TechGirl',
    password: 'password123'
  },
  {
    username: 'TechLover',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;