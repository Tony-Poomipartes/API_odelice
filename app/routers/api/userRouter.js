const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { userController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: userPostSchema } = require('../../validations/schemas/user.schema');

const router = express.Router();

/**
 * a user type
 *
 * @typedef {object} user
 * @property {number} id - user id
 * @property {string} email - user name
 * @property {string} password - user descrition
 * @property {string} firstname - user steps
 * @property {string} lastname - user picture
 * @property {string} pseudo - member member_id
 * @property {string} picture - member member_id
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * GET /api/users
 *
 * @summary get all users
 * @tags users - The O'Delices users
 *
 * @return {array<user>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(userController.getAll.bind(userController)));

/**
 * POST /api/users
 *
 * @summary create a new user
 * @tags users - The O'Delices users
 *
 * @param {user} request.body - user
 *
 * @return {user} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(userPostSchema, "body"), controllerHandler(userController.create.bind(userController)));

/**
 * GET /api/users/{id}
 *
 * @summary get a user
 * @tags users - The O'Delices users
 *
 * @param {number} id.path - user id
 *
 * @return {user} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id([0-9]+)', controllerHandler(userController.getOne.bind(userController)));



module.exports = router;