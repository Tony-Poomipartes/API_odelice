const Joi = require('joi');

const arrayrequest = !null;

const schema = {




    post: Joi.object().keys({
      ingredients: Joi.array().required(),
    }).required(),

  
  // post: Joi.().keys({
  //     ingredients: {
  //       type: [ !null || undefined ],
  //     }
  // }).required(),

/*   put: Joi.object().keys({
    name: Joi.string().pattern(termRegex),
    type: Joi.string().pattern(termRegex),
  }).required(), */
};

module.exports = schema;