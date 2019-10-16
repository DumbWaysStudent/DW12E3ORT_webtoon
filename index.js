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
  router.get('/webtoons', authenticated, Webtoon.AllToon);
  router.get(
    '/webtoon/:id_webtoon/episodes',
    authenticated,
    Webtoon.EpisodeToon,
  );
  router.get(
    '/webtoon/:id_webtoon/episode/:id_episode',
    authenticated,
    Webtoon.PageEpisode,
  );
  router.get('/user/:user_id/webtoons', authenticated, Webtoon.showMyToon);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
