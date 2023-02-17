const random = {
  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getRandomArrayValue(arr) {
    const arrayLength = arr.length;
    const position = random.getRandomInteger(0, arrayLength - 1);
    return arr[position];
  },
};

module.exports = random;
