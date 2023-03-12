const Joi = require('joi');

const schema = {

  post: Joi.object().keys({
    ingredients: {
      type: [!null || undefined],
    },
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
