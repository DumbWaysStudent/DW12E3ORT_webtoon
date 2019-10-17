'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep. 1',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81-DvO03QeL.jpg',
          toon_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Ep. 2',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61UivyrXOuL._SX331_BO1,204,203,200_.jpg',
          toon_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  },
};
