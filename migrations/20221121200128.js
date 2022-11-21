'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kpi1s', {
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
    });
    await queryInterface.createTable('kpi2s', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};