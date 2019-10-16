const models = require('../models');
const Toon = models.toon;
const Genre = models.genre;
const User = models.user;
const Episode = models.episode;
const Page = models.page;

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

const isFav = data => {
  const newDataFav = data.filter(item => item.isFavorite.length > 0);
  const newData = newDataFav.map(item => {
    let newDataItem = {
      title: item.title,
      genre: item.toonGenre.name,
      isFavorite: item.isFavorite.length ? true : false,
      image: item.image,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return newDataItem;
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
    let newDataToon;
    const favToon = req.query.is_favorite;
    if (favToon == 'true') newDataToon = isFav(data);
    else newDataToon = dataToon(data);
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

exports.PageEpisode = (req, res) => {
  const id_toons = req.params.id_webtoon;
  const episodeId = req.params.id_episode;

  Page.findAll({
    include: [
      {
        model: Episode,
        as: 'episodeID',
        where: {toon_id: id_toons, id: episodeId},
        attributes: {
          exclude: [
            'id',
            'title',
            'image',
            'toon_id',
            'createdAt',
            'updatedAt',
          ],
        },
      },
    ],
    attributes: {exclude: ['id_episode', 'id']},
  }).then(data => {
    res.send(data);
  });
};
