const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const sendNotification = require('./../utils/sendNotification');
const buildNotification = require('./../emailTemplates/shuffleNotification');



class Member extends Model {
    inviteResponse() {
        //send notification
        //update database user_id accepted and acceptedDate
    }
    lotteryNotification() {
        //email notification
        return sendNotification(buildNotification(this))

    }
};

Member.init(    
    {
    name: {
        type: DataTypes.STRING,
        allowNull: true
            },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
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
    giveToMember: {
        type: DataTypes.INTEGER,
        references: {
            model: "member",
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
