const defaultController = require('../controllers/defaultController.js');
const homeController = require('../controllers/homeController.js');
const catalogController = require('../controllers/catalogController.js');
const createController = require('../controllers/createController.js');
const extraController = require('../controllers/extraController.js');

module.exports = (app) => {
  app.use(homeController);
  app.use('/catalog', catalogController);
  app.use('/create/car', createController);
  app.use('/create/car-extra', extraController);

  app.all('*', defaultController);
};
