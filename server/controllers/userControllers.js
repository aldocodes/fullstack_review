const { User } = require('../../db/schemas');

const userController = {
  get: (req, res) => {
    User.find({
      where: {
        username: req.params.username
      }
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.log('error fetching user data ', err));
  },
  fetchAll: (req, res) => {
    User.findAll({})
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  },
  post: (req, res) => {
    User.find({ where: req.body })
      .then(data => {
        if (data) {
          console.log('data = ', data)
          res.status(301).send('user already exists');
        } else {
          User.create(req.body)
            .then(data => {
              res.status(201).send(data);
            })
            .catch(err => console.log('error creating the user ', err));
        }
      })
  }
}

module.exports = {
  userController: userController
}
