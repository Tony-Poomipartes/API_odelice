const express = require('express');
const tokenHandler = require('../../controllers/helpers/tokenHandler');
const validate = require('../../validations/validate');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { memberController } = require('../../controllers/api');


const { post: memberPostSchema, put: memberPutSchema  } = require('../../validations/schemas/member.schema');

const router = express.Router();

/**
 * a member type
 *
 * @typedef {object} Member
 * @property {number} id - member id
 * @property {string} email - member email
 * @property {string} password - member password
 * @property {string} passwordConfirm - passwordConfirm password
 * @property {string} firstname - member firstname
 * @property {string} lastname - member lastname
 * @property {string} pseudo - member pseudo
 * @property {string} picture - member picture
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * a member type post and put
 *
 * @typedef {object} MemberPostPut
 * @property {string} email - member email
 * @property {string} password - member password
 * @property {string} passwordConfirm - passwordConfirm password
 * @property {string} firstname - member firstname
 * @property {string} lastname - member lastname
 * @property {string} pseudo - member pseudo
 * @property {string} picture - member picture
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
router.get('/', tokenHandler, controllerHandler(memberController.getAll.bind(memberController)));

/**
 * POST /api/members
 *
 * @summary create a new member
 * @tags Members - The O'Delices recipes
 *
 * @param {MemberPostPut} request.body - member
 *
 * @return {Member} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(memberPostSchema, "body"), controllerHandler(memberController.handleSignUpForm.bind(memberController)));

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
router.get('/:id([0-9]+)', tokenHandler, controllerHandler(memberController.getOneDetails.bind(memberController)));

/**
 * PUT /api/members/{id}
 *
 * @summary modify a member
 * @tags Members - The O'Delices recipes
 *
 * @param {number} id.path - member id
 * 
 * @param {MemberPostPut} request.body - member body
 *
 * @return {Member} 200 - success response
 * @return {object} 500 - internal server error
 */
router.put('/:id([0-9]+)', tokenHandler, validate(memberPutSchema, 'body'), controllerHandler(memberController.modifyMember.bind(memberController)));

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
router.delete('/:id([0-9]+)', tokenHandler, controllerHandler(memberController.delete.bind(memberController)));

module.exports = router;