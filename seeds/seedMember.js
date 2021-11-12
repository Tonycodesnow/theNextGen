const Member = require("../models/Member");

const members = [
  {
    name: "Rachel Green",
    email: "RachelGreen@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: 3, // user_id is required (default is null)
    event_id: 1, // event_id is required
  },
  {
    name: "Monica Geller",
    email: "MonicaGeller@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: 4, // user_id is required (default is null)
    event_id: 1, // event_id is required
  },
  {
    name: "Phoebe Buffay-Hannigan",
    email: "PhoebeB@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: 5, // user_id is required (default is null)
    event_id: 1, // event_id is required
  },
  {
    name: "Joey Tribbiani",
    email: "JoeyTribbiani@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: 6, // user_id is required (default is null)
    event_id: 1, // event_id is required
  },
  {
    name: "Dr. Ross Geller, Ph.D.",
    email: "Geller@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: 1, // user_id is required (default is null)
    event_id: 1, // event_id is required
  },
  {
    name: "Chandler Bing",
    email: "BingEmail@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: 2, // user_id is required (default is null)
    event_id: 1, // event_id is required
  },
  {
    name: "Ursula Buffay",
    email: "UrsulaBuffay@gmail.com", // email is required
    accepted: false, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: null, // user_id is required (default is null)
    event_id: 2, // event_id is required
  },
 
  {
    name: "Monica Geller",
    email: "MonicaGeller@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: null, // user_id is required (default is null)
    event_id: 2, // event_id is required
  },
  {
    name: "Phoebe Buffay-Hannigan",
    email: "PhoebeB@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date (), // acceptedDate is required (default is null)
    inviationDate: new Date (), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: null, // user_id is required (default is null)
    event_id: 2, // event_id is required
  },
  {
    name: "Joey Tribbiani",
    email: "JoeyTribbiani@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date(), // acceptedDate is required (default is null)
    inviationDate: new Date(), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: null, // user_id is required (default is null)
    event_id: 2, // event_id is required
  },
  {
    name: "Dr. Ross Geller, Ph.D.",
    email: "Geller@gmail.com", // email is required
    accepted: true, // accepted is required (default is false)
    acceptedDate: new Date(), // acceptedDate is required (default is null)
    inviationDate: new Date(), // inviationDate is required (default is null)
    giveToUser: null, // giveToUser is required (default is null)
    receiveFromUser: null, // receiveFromUser is required (default is null)
    user_id: null, // user_id is required (default is null)
    event_id: 2, // event_id is required
  },
];

const seedMembers = () => Member.bulkCreate(members);

module.exports = seedMembers;
