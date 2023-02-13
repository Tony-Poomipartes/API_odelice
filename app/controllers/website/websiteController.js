const debug = require('debug')('cadex:webcontrollers');

const websiteController = {
  getHomePage(_, response) {
    debug('websiteController.getHomePage');
    response.render('home');
  },
};

module.exports = websiteController;
