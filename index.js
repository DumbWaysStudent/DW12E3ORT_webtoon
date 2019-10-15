const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;

app.use(bodyParser.json());

//controllers
const AuthController = require('./controllers/Lonetoon');

//middlewares

app.group('/api/v1', router => {
  //auth API
  router.post('/login', AuthController.login);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
