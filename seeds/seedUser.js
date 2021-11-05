const  User = require('../models/User');

const usersData = [
    {
        password: '123456',
        email: 'email@email.com',  // email
        first_name: 'Adam',
        last_name: 'First',
        phone: '5555555555'
    },
    {
        password: '123456',
        email: 'email1@email.com',  // email
        first_name: 'Eve',
        last_name: 'Last',
        phone: '3333333333',
    }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;