class UserInputError extends Error {
  constructor(originalError) {
    super('Les données transmises ne sont pas correctes');
    this.name = 'UserInputError';
    this.statusCode = 400;
    this.originalError = originalError;
  }
}

module.exports = UserInputError;
