const Joi = require('joi');

const emailRegex = /^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,15}$/;

const schema = {

  post: Joi.object().keys({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().pattern(passwordRegex).required(),
    passwordConfirm: Joi.string().pattern(passwordRegex).required(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    pseudo: Joi.string().required(),
    picture: Joi.string().optional().allow(''),
  }).required(),

  put: Joi.object().keys({
    email: Joi.string().pattern(emailRegex),
    password: Joi.string().pattern(passwordRegex),
    passwordConfirm: Joi.string().pattern(passwordRegex),
    firstname: Joi.string(),
    lastname: Joi.string(),
    pseudo: Joi.string(),
    picture: Joi.string().optional().allow('')
    //file: Joi.string().optional().allow(''),
  }).required(),
};

module.exports = schema;