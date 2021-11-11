const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {};

Event.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lottery_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        party_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "event"
    }
);


module.exports = Event;