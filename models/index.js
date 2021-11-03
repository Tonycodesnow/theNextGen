const User = require('./User');
const Event = require('./Event');
const Wishitem = require('./Wishitem');

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