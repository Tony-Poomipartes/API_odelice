const cadexService = require('../cadex');
const random = require('../../helpers/random');
const data = require('../../../data/parts.json');

const cadex = cadexService.generate();

describe('cadexService.generate method🚀 ', () => {
  it('should return a string', () => {
    expect(typeof cadex).toBe('object');
  });
  // it('should contains at least 3 spaces', () => {
  //   expect(cadex.split(' ').length).toBeGreaterThanOrEqual(4);
  // });
  it('should have a name , an adjective, a verb and a complement properties', () => {
    expect(cadex).toHaveProperty('name');
    expect(cadex).toHaveProperty('adjective');
    expect(cadex).toHaveProperty('verb');
    expect(cadex).toHaveProperty('complement');
  });
  // it('should have properties with value from data arrays', () => {
  //   expect(data.names).toContain('cadex.name');
  //   expect(data.adjectives).toContain('cadex.adjective');
  //   expect(data.verbs).toContain('cadex.verb');
  //   expect(data.complements).toContain('cadex.complement');
  // });
});

describe('random.getRandomInteger method', () => {
  it('should return a number', () => {
    expect(typeof random.getRandomInteger(0, 10)).toBe('number');
  });

  it('should return a value in the right range', () => {
    expect(random.getRandomInteger(0, 10)).toBeLessThanOrEqual(10);
    expect(random.getRandomInteger(0, 10)).toBeGreaterThanOrEqual(0);
    expect(random.getRandomInteger(0, 1)).toBeGreaterThanOrEqual(0);
    expect(random.getRandomInteger(0, 1)).toBeLessThanOrEqual(1);
  });
});

describe('random.getRandomArrayValue method', () => {
  it('should return a value from an array', () => {
    const mocks = ['Hello', 'world'];
    expect(mocks.includes(random.getRandomArrayValue(mocks))).toBe(true);
  });
});
