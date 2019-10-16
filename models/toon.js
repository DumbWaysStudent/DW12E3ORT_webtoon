'use strict';
module.exports = (sequelize, DataTypes) => {
  const Toons = sequelize.define(
    'toon',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {},
  );
  Toons.associate = function(models) {
    Toons.belongsTo(models.genre, {
      as: 'toonGenre',
      foreignKey: 'genre',
    }),
      Toons.belongsTo(models.user, {
        as: 'createdBy',
        foreignKey: 'created_by',
      }),
      Toons.belongsToMany(models.user, {
        through: models.favorite,
        as: 'isFavorite',
        foreignKey: 'id_toon',
      });
  };
  return Toons;
};
