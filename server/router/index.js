const router = require('express').Router();

const { userController } = require('../controllers/userControllers');

// req.params = {
//   username: jospeh
// }

// axios.get('/api/users/joseph')

router.route('/users/:username')
  .get(userController.get);

router.route('/users')
  .get(userController.fetchAll)
  .post(userController.post);

module.exports = {
  router: router
}
