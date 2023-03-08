const Joi = require('joi');

const schema = {

  post: Joi.object().keys({
    content: Joi.string().required(),
    rate: Joi.string().required(),
    member_id: Joi.number().integer(),
  }).required(),

  put: Joi.object().keys({
    content: Joi.string(),
    rate: Joi.string(),
  }).required(),
};

module.exports = schema;