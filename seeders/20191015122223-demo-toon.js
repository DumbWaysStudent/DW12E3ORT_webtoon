'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'toons',
      [
        {
          title: 'Your Lie In April',
          genre: 1,
          image:
            'https://pm1.narvii.com/6769/9e0fc73fde9ff7693acc3e9fec8db49a7022c881v2_hq.jpg',
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Samurai X',
          genre: 2,
          image: 'https://wallpaperplay.com/walls/full/1/9/6/318661.jpg',
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Naruto Chapter 5',
          genre: 2,
          image: 'https://i.ytimg.com/vi/c_g0hckcfKI/maxresdefault.jpg',
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('toons', null, {});
  },
};
