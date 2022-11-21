'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('kpi1s', [
      {
        service_id: 1,
        interval_start_timestamp: 1668885266920.0,
        interval_end_timestamp: 1668885266915.0,
        total_bytes: 8,
        interval: "1-hour",
        id: "9ba23ffd-87dd-4789-9303-a905a236bf0b"
      },
      {
        service_id: 2,
        interval_start_timestamp: 1768885266915.0,
        interval_end_timestamp: 1768885266915.0,
        total_bytes: 2,
        interval: "5-minutes",
        id: "c922c1e6-2639-4fb4-aa7e-68e3caad0a4d"
      }
    ], {}
    );
    await queryInterface.bulkInsert('kpi2s', [
          {
            id: "f0359564-6f8c-45fb-8470-a694b1971ed9",
            cell_id: "f7d18a9f-22ca-4a5c-87bc-e5a60eee01cc",
            interval_start_timestamp: 1668885266920.0,
            interval_end_timestamp: 1668885266915.0,
            number_of_unique_users: 8,
            interval: "1-hour"
          },
          {
            id: "68dc3dbe-886a-4bf0-8bbc-843a656a0826",
            cell_id: "0ab45a2d-2a2e-4f20-868c-4aeda9b60519",
            interval_start_timestamp: 1768885266915.0,
            interval_end_timestamp: 1768885266915.0,
            number_of_unique_users: 12,
            interval: "5-minutes"
          }
        ], {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('kpi1s', null, {});
    await queryInterface.bulkDelete('kpi2s', null, {});
  }
};
