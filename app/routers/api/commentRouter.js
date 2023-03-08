const express = require('express');
const tokenHandler = require('../../controllers/helpers/tokenHandler');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { commentController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: commentPostSchema, put: commentPutSchema } = require('../../validations/schemas/comment.schema');

const router = express.Router();

/**
 * a comment type
 *
 * @typedef {object} Comment
 * @property {number} id - comment id
 * @property {string} content - comment content
 * @property {string} rate - comment rate
 * @property {string} member_id - member member_id
 * @property {string} recipe_id - comment recipe_id
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * GET /api/comments
 *
 * @summary get all comments
 * @tags comments - The O'Delices comments
 *
 * @return {array<Comment>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(commentController.getAll.bind(commentController)));

/**
 * POST /api/comments
 *
 * @summary create a new comment
 * @tags comments - The O'Delices comments
 *
 * @param {Comment} request.body - comment body
 *
 * @return {Comment} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', tokenHandler, validate(commentPostSchema, "body"), controllerHandler(commentController.create.bind(commentController)));

/**
 * GET /api/comments/{id}
 *
 * @summary get a comment
 * @tags comments - The O'Delices comments
 *
 * @param {number} id.path - comment id
 *
 * @return {Comment} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id([0-9]+)', controllerHandler(commentController.getOne.bind(commentController)));

/**
 * PUT /api/comments/{id}
 *
 * @summary modify a comment
 * @tags comments - The O'Delices comments
 *
 * @param {number} id.path - comment id
 * 
 * @param {Comment} request.body - comment body
 *
 * @return {Comment} 200 - success response
 * @return {object} 500 - internal server error
 */
router.put('/:id([0-9]+)', tokenHandler, validate(commentPutSchema, 'body'), controllerHandler(commentController.modify.bind(commentController)));

/**
 * DELETE /api/comments/{id}
 *
 * @summary delete a recipe
 * @tags comments - The O'Delices comments
 *
 * @param {number} id.path - comment id
 *
 * @return {object} 204 - success response
 * @return {object} 500 - internal server error
 */
router.delete('/:id([0-9]+)', tokenHandler, controllerHandler(commentController.delete.bind(commentController)));

module.exports = router;