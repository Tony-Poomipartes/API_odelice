const debug = require('debug')('odelice:swagger');
const expressSwagger = require('express-jsdoc-swagger');

//swagger setup
const swaggerOptions = {
    info: {
        version: '1.0.0',
        title: "O'Delices API",
        description: 'api recettes de cuisines'
    },
    filesPatttern: './**/*.js',
    swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE ?? '/api-docs',
    exposeSwaggerUI: true,
};

/**
 * inject swaggerUI in application
 * @param {Object} app - express application
 * @param {string} baseDir - the beaseDir where to search for docs
 */
function injectSwagger(app, baseDir) {
    debug('swagger UI injected');
    swaggerOptions.baseDir = baseDir;
    expressSwagger(app)(swaggerOptions);
}

module.exports = injectSwagger;