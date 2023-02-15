const debug = require('debug')('cadex:dataMapper');
const client = require('./database');

const dataMapper = {
  /**
   * returns a random cadex term from a specific table
   *
   * @param {('name'|'adjective'|'verb'|'complement')} tableName - name of the table
   * @returns {string} a random term
   */
  async getRandomTermFromTable(tableName) {
    const preparedQuery = {
      text: `SELECT * FROM ${tableName} ORDER BY random() LIMIT 1`,
    };
    const results = await client.query(preparedQuery);
    if (!results.rows.length) {
      debug(`getting random term from table "${tableName}" but table is empty`);
      throw new Error(`la table ${tableName} est vide, impossible de récupérer une valeur`);
    }
    debug(`getting random term from table "${tableName}": '${results.rows[0].content}'`);
    return results.rows[0].content;
  },

  /**
   * add new terms to the database
   *
   * @param {Object} termsObj - an object with the terms to add
   * @param {string} termsObj.name - a new name
   * @param {string} termsObj.adjective - a new adjective
   * @param {string} termsObj.verb - a new verb
   * @param {string} termsObj.complement - a new complement
   */
  async addNewTerms(termsObj) {
    // on limite les inserts aux tables existantes
    const authorizedProps = ['name', 'adjective', 'verb', 'complement'];
    // on crée un tableau pour stocker les promesses
    const promises = [];

    authorizedProps.forEach((prop) => {
      // si on a bien reçu un nouveau terme pour la table 'prop'
      if (termsObj[prop]) {
        const preparedQuery = {
          text: `INSERT INTO "${prop}" ("content") VALUES ($1)`,
          values: [termsObj[prop]],
        };
        debug(`inserting '${termsObj[prop]}' in table '${prop}'`);
        // on ajoute la promesse dans le tableau promises
        promises.push(client.query(preparedQuery));
      }
    });
    // on attends la résolution de toutes les promesses
    await Promise.all(promises);
  },

  /**
   * returns a cadex correction
   *
   * @param {string} name - the cadex name
   * @param {string} adjective - the cadex adjective
   * @param {string} verb - the cadex verb
   * @param {string} complement the cadex complement
   * @returns {object} the correction for a cadex
   */
  async getCombinaison(name, adjective, verb, complement) {
    debug(`getting correction for '${name} ${adjective} ${verb} ${complement}'`);
    const preparedQuery = {
      text: `SELECT * FROM combinaison
             WHERE
             name_id=(SELECT id from "name" WHERE content=$1) AND
             adjective_id=(SELECT id from "adjective" WHERE content=$2) AND
             verb_id=(SELECT id from "verb" WHERE content=$3) AND
             complement_id=(SELECT id from "complement" WHERE content=$4)`,
      values: [name, adjective, verb, complement],
    };
    const results = await client.query(preparedQuery);
    if (!results.rows.length) {
      debug('no correction found');
    }
    return results.rows[0];
  },
};

module.exports = dataMapper;
