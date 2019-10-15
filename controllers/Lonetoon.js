const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const models = require('../models');
const User = models.user;

exports.register = (req, res) => {
  //check if email and pass match in db tbl user
  const email = req.body.email;
  const password = req.body.password; //use encryption in real world case!

  const token = jwt.sign({UserId: User.id}, 'my-secret-key');

  User.create({
    email,
    password,
    name: null,
    avatar: null,
  })
    .then(User => {
      if (User) {
        const token = jwt.sign({UserId: User.id}, 'my-secret-key');

        res.send({
          email,
          token,
        });
      }
    })
    .catch(Sequelize.ValidationError, err => {
      // Respond with validation errors
      return res.status(406).send({message: err.message});
    })
    .catch(err => {
      // Every other error
      return res.status(400).send({
        message: err.message,
      });
    });
};
