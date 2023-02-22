/** Class representing a bad input error. */
class BadInputError extends Error {
    /**
     * create a bad input error
     *
     * @augments Error
     *
     * @param {Error} originalError - the original error
     */
    constructor(originalError) {
        super('Bad input');
        if (originalError) {
            this.originalError = originalError;
            this.detail = this.originalError.details[0].message;
        }
        this.httpStatusCode = 400;
    }
}

module.exports = BadInputError;