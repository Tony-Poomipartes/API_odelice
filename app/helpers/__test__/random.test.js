const random = require('../random');

describe('random.getRandomInteger method', () => {
  it('should return a number', () => {
    expect(typeof random.getRandomInteger(0, 10)).toBe('number');
  });

  it('should return a value in the right range', () => {
    expect(random.getRandomInteger(0, 10)).toBeLessThanOrEqual(10);
    expect(random.getRandomInteger(0, 10)).toBeGreaterThanOrEqual(0);
    expect(random.getRandomInteger(0, 1)).toBeGreaterThanOrEqual(0);
    expect(random.getRandomInteger(0, 1)).toBeLessThanOrEqual(1);
    expect(random.getRandomInteger(10, 20)).toBeGreaterThanOrEqual(10);
    expect(random.getRandomInteger(10, 20)).toBeLessThanOrEqual(20);
  });
});

describe('random.getRandomArrayValue method', () => {
  it('should return a value from an array', () => {
    const mocks = ['Hello', 'world'];
    expect(mocks.includes(random.getRandomArrayValue(mocks))).toBe(true);
  });
});
