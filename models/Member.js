const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const sendNotification = require('./../utils/sendNotification');
const buildNotification = require('./../emailTemplates/shuffleNotification');



class Member extends Model {
    inviteResponse() {
        //send notification
        //update database user_id accepted and acceptedDate
    }
    async lotteryNotification() {
        //email notification
        return await sendNotification(buildNotification(this))

    }
    getEmail() {
        return this.email;
    }
    async getNameToGift() {
        return await Member.findOne({
            where:{
                id: this.giveToMember
            }
        })
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
    giveToMemberName: {
        type: DataTypes.STRING,
        allowNull: true
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
        hooks: {
            async afterUpdate(member,options) {
                if (!member.giveToMember) {
                    return;
                }
                 return await member.lotteryNotification();
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "member",
        
    }
);

module.exports = Member;
