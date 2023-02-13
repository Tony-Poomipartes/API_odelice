const debug = require('debug')('cadex:controllerHandler');

module.exports = (controller) => {
  debug(`create contoller handler for ${controller.name}`);
  return async (request, response, next) => {
    try {
      await controller(request, response, next);
    } catch (err) {
      next(err);
    }
  };
};
