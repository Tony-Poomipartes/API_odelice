const Joi = require('joi');

const schema = {
    post: Joi.object({
      email: Joi.string().pattern(/^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required(),
      password: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      pseudo: Joi.string().required(),
      picture: Joi.string(),
    }).required(),
};

module.exports = schema;