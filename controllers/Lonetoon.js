const models = require('../models');
const Toon = models.toon;
const Genre = models.genre;
const User = models.user;
const Episode = models.episode;

const dataToon = data => {
  const newData = data.map(item => {
    let newItem = {
      title: item.title,
      genre: item.toonGenre.name,
      isFavorite: item.isFavorite.length ? true : false,
      image: item.image,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      createdBy: item.createdBy.id,
    };
    return newItem;
  });
  return newData;
};

exports.AllToon = (req, res) => {
  Toon.findAll({
    include: [
      {
        model: Genre,
        as: 'toonGenre',
        attributes: ['name'],
      },
      {
        model: User,
        as: 'createdBy',
        attributes: ['id'],
      },
      {
        model: User,
        as: 'isFavorite',
      },
    ],
    attributes: {exclude: ['genre', 'created_by']},
  }).then(data => {
    const newDataToon = dataToon(data);
    res.send(newDataToon);
  });
};

exports.EpisodeToon = (req, res) => {
  const id = req.params.id_webtoon;

  Episode.findAll({
    where: {toon_id: id},
    attributes: {exclude: ['id', 'toon_id']},
  }).then(data => {
    res.send(data);
  });
};
