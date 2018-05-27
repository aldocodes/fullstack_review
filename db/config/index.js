const Sequelize = require('sequelize');

const connection = new Sequelize('countries', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

connection.authenticate()
  .then(() => {
    console.log('successfully connected to db')
  })
  .catch(err => {
    console.log('error connecting to database ', err);
  })

module.exports = {
  connection: connection
}
