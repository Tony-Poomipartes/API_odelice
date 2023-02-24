const Joi = require('joi');

const schema = {
    post: Joi.object({
      content: Joi.string().required(),
      rate: Joi.string().required(),
    }).required(),
    patch: Joi.object({
      content: Joi.string(),
      rate: Joi.string(),
    }).required(),
};

module.exports = schema;