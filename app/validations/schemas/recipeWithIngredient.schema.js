const Joi = require('joi');





const schema = {

  post: Joi.object().keys({
    ingredients: Joi.array().required(),
  }).required(),
};

module.exports = schema;