const User = require('./User');
const Event = require('./Event');

User.hasMany(Event, {
    foreignKey: 'user_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id'
});

