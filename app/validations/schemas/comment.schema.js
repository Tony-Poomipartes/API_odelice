const Joi = require('joi');

const schema = {
  post: Joi.object({
    content: Joi.string().required(),
    rate: Joi.string().required(),
    member_id: Joi.string(),
  }).required(),
  patch: Joi.object({
    content: Joi.string(),
    rate: Joi.string(),
    member_id: Joi.string(),
  }).required(),
};

module.exports = schema;