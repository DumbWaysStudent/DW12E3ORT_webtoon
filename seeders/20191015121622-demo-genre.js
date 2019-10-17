'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'genres',
      [
        {
          name: 'Romance',
        },
        {
          name: 'Fighting',
        },
        {
          name: 'Comedy',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres', null, {});
  },
};
