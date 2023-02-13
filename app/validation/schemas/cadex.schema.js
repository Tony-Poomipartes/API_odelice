const Joi = require('joi');

const cadexPartRule = Joi.string().min(2).pattern(/^[a-zA-ZÀ-ÿ0-9 '-]+$/);

const schemas = {
  get: Joi.object({
    name: cadexPartRule,
    adjective: cadexPartRule,
    verb: cadexPartRule,
    complement: cadexPartRule,
  }),
  post: Joi.object({
    name: cadexPartRule,
    adjective: cadexPartRule,
    verb: cadexPartRule,
    complement: cadexPartRule,
  }).min(1).required(),
};

module.exports = schemas;
