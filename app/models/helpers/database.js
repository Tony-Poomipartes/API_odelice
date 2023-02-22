const debug = require('debug')('odelice:database');
const { Pool } = require('pg');

const pool = new Pool();

pool.connect().then(() => {
    debug('database client connected');
});

module.exports = {
    originalClient: pool,
    async query(...params) { // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters
        debug(...params); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        return this.originalClient.query(...params);
    },
};