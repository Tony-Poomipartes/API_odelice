const express = require('express');
const websiteController = require('../../controllers/website/websiteController');
const websiteErrorController = require('../../controllers/website/websiteErrorController');
const controllerHandler = require('../../controllers/controllerHandler');
const NotFoundError = require('../../errors/NotFoundError');

const router = express.Router();

router.get('/', controllerHandler(websiteController.getHomePage));

router.use((request, response, next) => {
  next(next(new NotFoundError()));
});

router.use(websiteErrorController.errorHandler);

module.exports = router;
