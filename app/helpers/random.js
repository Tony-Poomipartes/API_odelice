const random = {
  /**
   * Returns a random integer between min and max (included)
   * @param {number} min - minimum value
   * @param {number} max - maximum value
   * @returns {number} a random integer
   */
  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  /**
   * Returns a random value from an array
   * @param {Array} arr - the source array
   * @returns {*} a random value from the source array
   */
  getRandomArrayValue(arr) {
    const arrayLength = arr.length;
    const position = random.getRandomInteger(0, arrayLength - 1);
    return arr[position];
  },
};

module.exports = random;
