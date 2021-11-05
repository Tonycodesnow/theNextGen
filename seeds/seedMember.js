const  Member = require('../models/Member');

const members = [
    {
        name: 'John Doe',
        email: '', // email is required
        accepted: true, // accepted is required (default is false)
        acceptedDate: new Date(),   // acceptedDate is required (default is null)
        inviationDate: new Date(),  // inviationDate is required (default is null)
        giveToUser: null, // giveToUser is required (default is null) 
        receiveFromUser: null, // receiveFromUser is required (default is null)  
        user_id: null, // user_id is required (default is null)
        event_id: 1, // event_id is required (default is null)
    }
];

const seedMembers = () => Member.bulkCreate(members);

module.exports = seedMembers;