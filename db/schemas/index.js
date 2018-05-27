const Sequelize = require('sequelize');

const { connection } = require('../config');

const User = connection.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  personality: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Country = connection.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.belongsToMany(Country, {
  through: 'user_countries'
})
Country.belongsToMany(User, {
  through: 'user_countries'
})

connection.sync({ force: true })
  .then(() => console.log('successfully created tables'))
  .catch(err => console.log('error creating tables ', err));

module.exports = {
  User: User,
  Country: Country
}
