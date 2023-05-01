const Joi = require('joi');



const termRegex = /^\w/;

const schema = {

  post: Joi.object().keys({
    name: Joi.string().pattern(termRegex).required(),
    type: Joi.string().pattern(termRegex).required(),
  }).required(),

  put: Joi.object().keys({
    name: Joi.string().pattern(termRegex),
    type: Joi.string().pattern(termRegex),
  }).required(),
};

module.exports = schema;