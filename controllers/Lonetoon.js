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

const getMyToon = data => {
  const newData = data.map(item => {
    let newItem = {
      title: item.title,
      genre: item.toonGenre.name,
      image: item.image,
      isFavorite: item.isFavorite.length ? true : false,
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

const toonByTitle = (data, title) => {
  const input = data.filter(item => {
    return item.title.toLowerCase().includes(title.toLowerCase());
  });
  let newData = input.map(item => {
    let newItem = {
      title: item.title,
      genre: item.toonGenre.name,
      isFavorite: item.isFavorite.length ? true : false,
      image: item.image,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return newItem;
  });
  return newData;
};

responsData = (data, res) => {
  Genre.findOne({
    where: {
      id: data.genre,
    },
    attributes: ['name'],
  }).then(item => {
    let newData = {
      id: data.id,
      title: data.title,
      genre: item.name,
      isFavorite: false,
      image: data.image,
      created_by: data.created_by,
      createdAt: data.createAt,
      updatedAt: data.updatedAt,
    };
    res.send(newData);
  });
};

responsUpdate = newData => {
  const newDataUpdate = {
    id: newData.id,
    title: newData.title,
    genre: newData.toonGenre.name,
    isFavorite: newData.isFavorite.length ? true : false,
    image: newData.image,
    created_by: newData.created_by,
    createdAt: newData.createAt,
    updatedAt: newData.updatedAt,
  };
  return newDataUpdate;
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
    else if (req.query.title) newDataToon = toonByTitle(data, req.query.title);
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

exports.showMyToon = (req, res) => {
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
    where: {created_by: req.params.user_id},
    attributes: {exclude: ['genre', 'created_by']},
  }).then(data => {
    const newDataMyToon = getMyToon(data);
    res.send(newDataMyToon);
  });
};

exports.createMyToon = (req, res) => {
  const userId = req.params.user_id;
  Genre.findOne({where: {name: req.body.genre}}).then(data => {
    const genre_id = data.id;
    Toon.create({
      title: req.body.title,
      genre: genre_id,
      image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
      created_by: userId,
    }).then(data => responsData(data, res));
  });
};

exports.updateMyToon = (req, res) => {
  const userId = req.params.user_id;
  const webtoonId = req.params.webtoon_id;

  Genre.findOne({where: {name: req.body.genre}, attributes: ['id']}).then(
    data =>
      Toon.update(
        {
          title: req.body.title,
          genres: data.id,
          image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        },
        {
          where: {created_by: userId, id: webtoonId},
        },
      ).then(() => {
        Toon.findOne({
          include: [
            {
              model: Genre,
              as: 'toonGenre',
              attributes: ['name'],
            },
            {
              model: User,
              as: 'isFavorite',
            },
          ],
          attributes: {exclude: ['created_by', 'genre']},
          where: {created_by: userId, id: webtoonId},
        }).then(newData => res.send(responsUpdate(newData)));
      }),
  );
};

exports.getEpisodeUser = (req, res) => {
  const userId = req.params.user_id;
  const webtoonId = req.params.webtoon_id;

  Episode.findAll({
    include: [
      {
        model: Toon,
        as: 'toonID',
        where: {created_by: userId, id: webtoonId},
        attributes: {
          exclude: [
            'id',
            'title',
            'genre',
            'image',
            'created_by',
            'createdAt',
            'updatedAt',
          ],
        },
      },
    ],
    attributes: {exclude: ['id', 'toon_id']},
  }).then(data => {
    res.send(data);
  });
};
