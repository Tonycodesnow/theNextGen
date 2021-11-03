const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wishitem extends Model {};

Wishitem.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        item_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true,
            },
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
        modelName: "wishitem"
    }
);

module.exports = Wishitem;