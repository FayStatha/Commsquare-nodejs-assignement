'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KPI1 extends Model {
    static associate(models) {
      // define association here
    }
  }
  KPI1.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    total_bytes:{
      type: Sequelize.INTEGER,
      allowNull: true
    },
    interval_start_timestamp:{
      type: Sequelize.FLOAT,
      allowNull: true
    },
    interval_end_timestamp:{
      type: Sequelize.FLOAT,
      allowNull: true
    },
    interval:{
      type: Sequelize.ENUM("1-hour", "5-minutes"),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'kpi1',
    timestamps: false,
  });
  return KPI1;
};