require('dotenv').config();
const debug = require('debug')('odelice:router');
const jwt = require('jsonwebtoken');


/**
 * Factory returning a controller with error handling
 *
 * @param {function} router - a middleware router
 * @returns {function} a middleware router with error management
 */
const authMiddleware = (request, response, next) => {
  debug(`token verification with error handling`);
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ message: 'Authorization header missing' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    request.userId = decoded.id;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;