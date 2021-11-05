const  Event = require('../models/Event.js');

const events = [
    {
        name: 'Event 1',
        description: 'Description 1',
        lottery_date: '2021-12-01',
        budget: 50,
        party_date: '2021-12-23',
        user_id: 1,
    },
    {
        name: 'Event 2',
        description: 'Description 2',
        lottery_date: '2021-12-02',
        budget: 20,
        party_date: '2021-12-24',
        user_id: 2,
    },
];


const seedEvents = () =>  Event.bulkCreate(events);

module.exports = seedEvents;