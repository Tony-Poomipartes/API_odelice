/**
 * @typedef {object} cadex
 * @property {string} name - name used in cadex
 * @property {string} adjective - adjective used in cadex
 * @property {string} verb - verb used in cadex
 * @property {string} complement - complement used in cadex
 * @property {string} cadex - full cadex
 */

/**
 * @typedef {object} error
 * @property {string} error - error description
 */
const debug = require('debug')('cadex:service');
const dataMapper = require('../models/dataMapper');

const cadexService = {
  async generate() {
    debug('generating new cadex');
    const promises = [
      dataMapper.getRandomTermFromTable('name'),
      dataMapper.getRandomTermFromTable('adjective'),
      dataMapper.getRandomTermFromTable('verb'),
      dataMapper.getRandomTermFromTable('complement'),
    ];
    const [name, adjective, verb, complement] = await Promise.all(promises);
    const cadexObject = {
      name,
      adjective,
      verb,
      complement,
      toString() {
        // return `${this.name} ${this.adjective} ${this.verb} ${this.complement}`;
        const { toString, correction, ...cadexParts } = this;
        return Object.values(cadexParts).join(' ');
      },
    };
    // look for a correct
    const combinaison = await dataMapper.getCombinaison(name, adjective, verb, complement);
    if (combinaison) {
      cadexObject.correction = {
        cadex: combinaison.correction,
        rating: combinaison.rating,
      };
    }
    return cadexObject;
  },

  async updateData(termsObj) {
    debug('adding new cadex terms');
    await dataMapper.addNewTerms(termsObj);
  },
};

module.exports = cadexService;
