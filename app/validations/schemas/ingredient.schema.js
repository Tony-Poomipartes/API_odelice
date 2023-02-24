const Joi = require('joi');

const schema = {
    post: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
    }).required(),
    patch: Joi.object({
      name: Joi.string(),
      type: Joi.string(),
    }).required(),
};

module.exports = schema;