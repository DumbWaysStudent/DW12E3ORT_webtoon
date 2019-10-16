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

//middlewares

app.group('/api/v1', router => {
  //auth API
  router.post('/login', AuthController.login);
  router.post('/register', Register.register);

  //Content
  router.get('/webtoons', Webtoon.AllToon);
  router.get('/webtoon/:id_webtoon/episodes', Webtoon.EpisodeToon);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
