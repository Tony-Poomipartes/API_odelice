const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { authController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: authPostSchema  } = require('../../validations/schemas/auth.schema');

const router = express.Router();

/**
 * a auth type
 *
 * @typedef {object} auth
 * @property {string} email - member email
 * @property {string} password - member password
 */


/**
 * POST /api/auth/login
 *
 * @summary Login
 * @tags auth - The O'Delices recipes
 *
 * //@param {auth} request.body - auth
 *
 * @return {auth} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/login', validate(authPostSchema, "body"), controllerHandler(authController.login.bind(authController)));

module.exports = router;