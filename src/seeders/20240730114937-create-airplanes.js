'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'A320',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'B737',
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'A380',
        capacity: 555,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Airplanes', null, {});
  }
};
