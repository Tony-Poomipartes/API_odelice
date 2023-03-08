class UserInputError extends Error {
  constructor(originalError) {
    super('The data transmitted is not correct');
    this.name = 'UserInputError';
    this.statusCode = 400;
    this.originalError = originalError;
  }
}

module.exports = UserInputError;