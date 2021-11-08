const  Event = require('../models/Event.js');

const events = [
    {
        name: 'Coffie Shop Gifts',
        description: 'Loco Friends Holiday',
        lottery_date: '2021-12-01',
        budget: 100,
        party_date: '2021-12-23',
        user_id: 1,
    },
    {
        name: 'Crazy Company Christmas',
        description: 'Office Secret Santa',
        lottery_date: '2021-12-02',
        budget: 20,
        party_date: '2021-12-24',
        user_id: 2,
    },
];


const seedEvents = () =>  Event.bulkCreate(events);

module.exports = seedEvents;