const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { memberController, member_detailsController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: memberPostSchema, patch: memberPatchSchema  } = require('../../validations/schemas/member.schema');

const router = express.Router();

/**
 * a member type
 *
 * @typedef {object} Member
 * @property {number} id - member id
 * @property {string} email - member email
 * @property {string} password - member password
 * @property {string} firstname - member firstname
 * @property {string} lastname - member lastname
 * @property {string} pseudo - member pseudo
 * @property {string} picture - member picture
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * GET /api/members
 *
 * @summary get all members
 * @tags Members - The O'Delices recipes
 *
 * @return {array<Member>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(member_detailsController.getAll.bind(member_detailsController)));

/**
 * POST /api/members
 *
 * @summary create a new member
 * @tags Members - The O'Delices recipes
 *
 * @param {Member} request.body - member
 *
 * @return {Member} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(memberPostSchema, "body"), controllerHandler(memberController.create.bind(memberController)));

/**
 * GET /api/members/{id}
 *
 * @summary get a member
 * @tags Members - The O'Delices recipes
 *
 * @param {number} id.path - member id
 *
 * @return {Member} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id([0-9]+)', controllerHandler(member_detailsController.getOne.bind(member_detailsController)));

/**
 * PATCH /api/members/{id}
 *
 * @summary modify a member
 * @tags Members - The O'Delices recipes
 *
 * @param {number} id.path - member id
 * 
 * @param {Member} request.body - member body
 *
 * @return {Member} 200 - success response
 * @return {object} 500 - internal server error
 */
router.patch('/:id([0-9]+)', validate(memberPatchSchema, 'body'), controllerHandler(memberController.modify.bind(memberController)));

/**
 * DELETE /api/members/{id}
 *
 * @summary delete a member
 * @tags Members - The O'Delices recipes
 *
 * @param {number} id.path - member id
 *
 * @return {object} 204 - success response
 * @return {object} 500 - internal server error
 */
router.delete('/:id([0-9]+)', controllerHandler(memberController.delete.bind(memberController)));

module.exports = router;