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
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
