const Joi = require('joi');

const schema = {
  post: Joi.object({
    quantity: Joi.string().required(),
    units: Joi.string().required().optional().allow(''),
    recipe_id: Joi.number().required(),
    member_id: Joi.number().required(),
  }).required(),
  patch: Joi.object({
    quantity: Joi.string(),
    units: Joi.string(),
    recipe_id: Joi.number(),
    member_id: Joi.number(),
  }).required(),
};

module.exports = schema;