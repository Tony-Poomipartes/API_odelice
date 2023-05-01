const Joi = require('joi');

const emailRegex = /^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


const schema = {

    post: Joi.object().keys({
      email: Joi.string().pattern(emailRegex).required(),
      password: Joi.string().required(),
    }).required(),
};

module.exports = schema;