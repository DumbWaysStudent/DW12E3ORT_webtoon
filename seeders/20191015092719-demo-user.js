'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'admin@lonetoon.com',
          password: 'Lonetoon',
          name: 'Admin',
          avatar: null,
        },
        {
          email: 'sony@gmail.com',
          password: '123456789',
          name: 'Sony',
          avatar: null,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
