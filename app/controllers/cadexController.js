const cadexService = require('../services/cadex');

const cadexController = {
  get(_, res) {
    const cadex = cadexService.generate();
    // plutôt que de simplement renvoyer une chaine de caractère
    // je souhaiterais recvoir un objet contenant les différentes parties
    // qui composent le cadavre exquis

    // malgré tout, j'aimerais bien avoir à disposition, une méthode des cadex,
    // permettant de récupérer un cadavre exquis complet (ex cadex.glue())

    // BONUS: Il est possible de procéder à la génération finale du cadex
    // sans faire appel à une nouvelle méthode comme glue()
    // essaie de trouver laquelle et implémente la.
    // par exemple, je voudrais pouvoir faire res.send(`${cadex}`);
    // et que cela renvoie le cadex complet.

    res.send(cadex.glue());
  },
  post(req, res) {
    cadexService.updateData(req.body);
    // const cadex = cadexService.updateData(req.body);
    // const { toString, ...cadexObject } = cadex;
    // cadexObject.cadex = `${cadex}`;
    // res.json(cadexObject);
  },
};

module.exports = cadexController;
