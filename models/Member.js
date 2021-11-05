const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Member extends Model {};

Member.init(
    {
    name: {
        type: DataTypes.STRING,
        allowNull: true
            },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
    },
    accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    acceptedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    invitationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    giveToUser: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        }
    },
    receiveFromUser: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "event",
          key: "id",
        },
    },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "member",
    }
);

module.exports = Member;
