const  User = require('../models/User.js');

const usersData = [
    {
        first_name: 'Dr. Ross',
        last_name: 'Geller',
        email: 'Geller@gmail.com',  // email
        password: '$2b$10$QQ71K8H0UYy21NZP.IEVVO9DISs9.9j7CRUpvKKesIG85LyJRmiPm',
        phone: '5555555555'
    },
    {
        first_name: 'Chandler',
        last_name: 'Bing',
        email: 'BingEmail@gmail.com',  // email
        password: '$2b$10$QQ71K8H0UYy21NZP.IEVVO9DISs9.9j7CRUpvKKesIG85LyJRmiPm',
        phone: '3333333333',
    },
    {
        first_name: 'Rachel',
        last_name: 'Green',
        email: 'RachelGreen@gmail.com',  // email
        password: '$2b$10$QQ71K8H0UYy21NZP.IEVVO9DISs9.9j7CRUpvKKesIG85LyJRmiPm',
        phone: '3333333333',
    },
    {
        first_name: 'Monica',
        last_name: 'Geller',
        email: 'MonicaGeller@gmail.com',  // email
        password: '$2b$10$QQ71K8H0UYy21NZP.IEVVO9DISs9.9j7CRUpvKKesIG85LyJRmiPm',
        phone: '3333333333',
    },
    {
        first_name: 'Phoebe',
        last_name: 'Buffay-Hannigan',
        email: 'PhoebeB@gmail.com',  // email
        password: '$2b$10$QQ71K8H0UYy21NZP.IEVVO9DISs9.9j7CRUpvKKesIG85LyJRmiPm',
        phone: '3333333333',
    },
    {
        first_name: 'Joey',
        last_name: 'Tribbiani',
        email: 'JoeyTribbiani@gmail.com',  // email
        password: '$2b$10$QQ71K8H0UYy21NZP.IEVVO9DISs9.9j7CRUpvKKesIG85LyJRmiPm',
        phone: '3333333333',
    },

];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;