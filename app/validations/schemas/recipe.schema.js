const Joi = require('joi');

const schema = {
    post: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        steps: Joi.string().required(),
        picture: Joi.string().required(),
    }).required(),
    patch: Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      steps: Joi.string().required(),
      picture: Joi.string().required(),
  }).required(),
};

module.exports = schema;