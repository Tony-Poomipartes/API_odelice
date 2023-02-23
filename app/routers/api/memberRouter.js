const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { memberController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: memberPostSchema, patch: memberPatchSchema  } = require('../../validations/schemas/member.schema');

const router = express.Router();

/**
 * a member type
 *
 * @typedef {object} member
 * @property {number} email - member id
 * @property {string} password - member name
 * @property {string} firstname - member descrition
 * @property {string} lastname - member steps
 * @property {string} pseudo - member picture
 * @property {string} picture - member member_id
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * GET /api/members
 *
 * @summary get all members
 * @tags members - The O'Delices members
 *
 * @return {array<member>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(memberController.getAll.bind(memberController)));

/**
 * POST /api/members
 *
 * @summary create a new member
 * @tags members - The O'Delices members
 *
 * @param {member} request.body - member
 *
 * @return {member} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(memberPostSchema, "body"), controllerHandler(memberController.create.bind(memberController)));

/**
 * GET /api/members/{id}
 *
 * @summary get a member
 * @tags members - The O'Delices members
 *
 * @param {number} id.path - member id
 *
 * @return {member} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id([0-9]+)', controllerHandler(memberController.getOne.bind(memberController)));

/**
 * PATCH /api/members/{id}
 *
 * @summary modify a member
 * @tags members
 *
 * @param {number} id.path - member id
 * @param {string} request.route - member route
 * @param {string} request.label - member label
 *
 * @return {member} 200 - success response
 * @return {object} 500 - internal server error
 */
router.patch('/:id([0-9]+)', validate(memberPatchSchema, 'body'), controllerHandler(memberController.modify.bind(memberController)));

module.exports = router;