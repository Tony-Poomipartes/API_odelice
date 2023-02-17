const data = require('../../data/parts.json');
const { getRandomArrayValue } = require('../helpers/random');

const cadexService = {
  generate() {
    const name = getRandomArrayValue(data.names);
    const adjective = getRandomArrayValue(data.adjectives);
    const verb = getRandomArrayValue(data.verbs);
    const complement = getRandomArrayValue(data.complements);
    return {
      name,
      adjective,
      verb,
      complement,
      glue() {
        // return `${this.name} ${this.adjective} ${this.verb} ${this.complement}`;
        const { glue, ...cadexparts } = this;
        return Object.values(cadexparts).join(' ');
      },
    };
  },
  updateData(termsObj) {
    console.log(Object.entries(termsObj));
  },
};
console.log('mon json', data);
module.exports = cadexService;
