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
  async post(request, response) {
    // on ajoute les données reçues
    debug(request.body, 'cadexController.post');
    await cadexService.updateData(request.body);
    // on génére un cadex et on remplace les parties nécessaires
    // autre syntaxe: const cadex = Object.assign(cadexService.generate(), request.body)
    const cadex = { ...await cadexService.generate(), ...request.body };
    response.json({ ...cadex, cadex: `${cadex}` });
  },
  async post(request, response) {
    // on ajoute les données reçues
    debug(request.body, 'cadexController.post');
    await cadexService.updateData(request.body);
    // on génére un cadex et on remplace les parties nécessaires
    // autre syntaxe: const cadex = Object.assign(cadexService.generate(), request.body)
    const cadex = { ...await cadexService.generate(), ...request.body };
    response.json({ ...cadex, cadex: `${cadex}` });
  },
};

module.exports = cadexController;
