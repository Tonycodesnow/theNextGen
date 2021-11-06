const  User = require('../models/User.js');

const usersData = [
    {
        first_name: 'Dr. Ross',
        last_name: 'Geller',
        email: 'Geller@gmail.com',  // email
        password: '123456',
        phone: '5555555555'
    },
    {
        first_name: 'Chandler',
        last_name: 'Bing',
        email: 'BingEmail@gmail.com',  // email
        password: '123456',
        phone: '3333333333',
    }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;