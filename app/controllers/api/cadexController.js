const debug = require('debug')('cadex:apiControllers');
const cadexService = require('../../services/cadex');

const cadexController = {
  /** */
  async get(request, response) {
    // on crée un nouvel objet qui a toutes les propriétés de cadex
    // et toutes celles de request.query
    // c'est une affectation par décomposition
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    debug('cadexController.get');
    const cadexObject = { ...await cadexService.generate(), ...request.query };
    response.json({ ...cadexObject, cadex: `${cadexObject}` });
  },
  async get(request, response) {
    // on crée un nouvel objet qui a toutes les propriétés de cadex
    // et toutes celles de request.query
    // c'est une affectation par décomposition
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    debug('cadexController.get');
    const cadexObject = { ...await cadexService.generate(), ...request.query };
    response.json({ ...cadexObject, cadex: `${cadexObject}` });
  },  async get(request, response) {
    // on crée un nouvel objet qui a toutes les propriétés de cadex
    // et toutes celles de request.query
    // c'est une affectation par décomposition
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    debug('cadexController.get');
    const cadexObject = { ...await cadexService.generate(), ...request.query };
    response.json({ ...cadexObject, cadex: `${cadexObject}` });
  },
};

module.exports = cadexController;
