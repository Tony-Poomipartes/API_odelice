/*
const { get: cadexGetSchema, post: cadexPostSchema } = require('./schemas/cadex.schema');

const validator = {
  async validateGet(request, response, next) {
    try {
      await cadexGetSchema.validateAsync(request.query);
      next();
    } catch (err) {
      response.status(400).json({ error: err.details[0].message });
    }
  },
  async validatePost(request, response, next) {
    try {
      await cadexPostSchema.validateAsync(request.body);
      next();
    } catch (err) {
      response.status(400).json({ error: err.details[0].message });
    }
  },
};
*/

/*
plutot que de créer un mw pour chaque validation, on crée une fonction qui renvoie
une fonction (factory) qui est un mw adapté
(cad qui valide un schema particulier contre un objet donné)
*/
const debug = require('debug')('cadex:validator');
const UserInputError = require('../errors/UserInputError');

function validate(schema, dataSource) {
  debug('create a customized validation middleware');
  return async (request, response, next) => {
    try {
      debug(`an anonymous validation middleware is validating request.${dataSource}`);
      await schema.validateAsync(request[dataSource]);
      next();
    } catch (err) {
      next(new UserInputError(err));
    }
  };
}

module.exports = validate;
