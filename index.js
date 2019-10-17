const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;

app.use(bodyParser.json());

//controllers
const AuthController = require('./controllers/auth');
const Register = require('./controllers/auth');
const Webtoon = require('./controllers/Lonetoon');
//midleware
const {authenticated} = require('./middleware');

//middlewares

app.group('/api/v1', router => {
  //auth API
  router.post('/login', AuthController.login);
  router.post('/register', Register.register);

  //Content

  //show all webtoon
  router.get('/webtoons', authenticated, Webtoon.AllToon);
  //show episode
  router.get(
    '/webtoon/:id_webtoon/episodes',
    authenticated,
    Webtoon.EpisodeToon,
  );
  //show detail page
  router.get(
    '/webtoon/:id_webtoon/episode/:id_episode',
    authenticated,
    Webtoon.PageEpisode,
  );
  //show my toon
  router.get('/user/:user_id/webtoons', authenticated, Webtoon.showMyToon);

  //create my toon
  router.post('/user/:user_id/webtoon', authenticated, Webtoon.createMyToon);

  //Update my Toon
  router.put(
    '/user/:user_id/webtoon/:webtoon_id',
    authenticated,
    Webtoon.updateMyToon,
  );

  //DeleteMyToon
  router.delete(
    '/user/:user_id/webtoon/:webtoon_id',
    authenticated,
    Webtoon.deleteMyToon,
  );

  //getEpisode:user
  router.get(
    '/user/:user_id/webtoon/:webtoon_id/episodes',
    authenticated,
    Webtoon.getEpisodeUser,
  );

  //create Episode
  router.post(
    '/user/:user_id/webtoon/:webtoon_id/episode',
    authenticated,
    Webtoon.createMyEpisode,
  );

  router.get(
    '/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/images',
    authenticated,
    Webtoon.getMyToonImage,
  );

  router.put(
    '/user/:user_id/webtoon/:webtoon_id/episode/:episode_id',
    authenticated,
    Webtoon.updateMyEpisode,
  );

  router.delete(
    '/user/:user_id/webtoon/:webtoon_id/episode/:episode_id',
    authenticated,
    Webtoon.deleteMyEpisode,
  );

  router.post(
    '/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image',
    authenticated,
    Webtoon.createMyPage,
  );

  router.delete(
    '/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image/:image_id',
    authenticated,
    Webtoon.deleteMyPage,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
