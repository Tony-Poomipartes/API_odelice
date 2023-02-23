const Joi = require('joi');

const schema = {
    post: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        steps: Joi.string().required(),
        picture: Joi.string().required(),
    }).required(),
    patch: Joi.object({
      name: Joi.string(),
      description: Joi.string(),
      steps: Joi.string(),
      picture: Joi.string(),
  }).required(),
};

module.exports = schema;