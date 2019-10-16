'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'pages',
      [
        {
          page: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/166468/Previews/be4705a0baca874ae9caf6285b301651._SX1280_QL80_TTD_.jpg',
          id_episode: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          page: 2,
          image:
            'https://static.comicvine.com/uploads/original/11115/111150904/4096122-naruto-1565020.jpg',
          id_episode: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          page: 3,
          image:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1379739674i/66437._SY540_.jpg',
          id_episode: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pages', null, {});
  },
};
