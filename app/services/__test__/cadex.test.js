const cadexService = require('../cadex');

const cadex = cadexService.generate();

describe('cadexService.generate method', () => {
  it('should return an object', () => {
    expect(typeof cadex).toBe('object');
  });
});
