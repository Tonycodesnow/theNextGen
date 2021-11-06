const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Member extends Model {
    inviteMember() {
        // code to send invite notification 
        //update database invitationDate
    }
    inviteResponse() {
        //send notification
        //update database user_id accepted and acceptedDate
    }
    lottery() {
        //make lottery anf update  give and recieve
        //email notification

        //need to update Event
    }


};

Member.init(    
    {
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
