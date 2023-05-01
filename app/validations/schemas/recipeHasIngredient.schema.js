const Joi = require('joi');

const schema = {
  post: Joi.object({
    quantity: Joi.number().required(),
    units: Joi.string().required().optional().allow(''),
    recipe_id: Joi.number().integer().required(),
    ingredient_id: Joi.number().integer().required(),
  }).required(),
  patch: Joi.object({
    quantity: Joi.number(),
    units: Joi.string(),
    recipe_id: Joi.number().integer(),
    ingredient_id: Joi.number().integer(),
  }).required(),
};

module.exports = schema;