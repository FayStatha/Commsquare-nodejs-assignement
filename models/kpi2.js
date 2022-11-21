'use strict';
const {
    Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class KPI2 extends Model {
        static associate(models) {
            // define association here
        }
    }
    KPI2.init({
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        cell_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: true,
        },
        number_of_unique_users: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        interval_start_timestamp: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        interval_end_timestamp: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        interval: {
            type: Sequelize.ENUM("1-hour", "5-minutes"),
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'kpi2',
        timestamps: false
    });
    return KPI2;
};