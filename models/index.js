const User = require('./User');
const Event = require('./Event');
const Wishitem = require('./Wishitem');
const Member = require('./Member');

User.hasMany(Event, {
    foreignKey: 'user_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Wishitem, {
    foreignKey: 'user_id'
});

Wishitem.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Member,{
    foreignKey: 'user_id'
});

Member.belongsTo(User, {
    foreignKey: 'user_id'
});

Event.hasMany(Member, {
    foreignKey: 'event_id'
});

Member.belongsTo(Event, {
    foreignKey: 'event_id'
});

Member.belongsTo(Member, {
    foreignKey: 'giveToMember',
    as: 'recipient'
});

module.exports = { User, Event, Member , Wishitem };