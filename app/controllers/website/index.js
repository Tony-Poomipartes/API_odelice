const websiteController = {
  /**
   * responds with the home page
   *
   * @param {Object} _
   * @param {Object} response
   */
  getHome: (_, response) => {
    response.render('home');
  },
};

module.exports = websiteController;
