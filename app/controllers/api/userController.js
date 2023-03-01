const { User } = require("../models");
const bcrypt = require('bcrypt');
const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const userDataMapper = require('../../models/userDataMapper');

/** Class representing a user controller. */
class userController extends CoreController {
    static dataMapper = userDataMapper;

    /**
     * create a user controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('userController created');
    }

  async handleSignUpFormSubmission(req, res) {
    // 1. Récupérer les champs du formulaire à partir du body de notre requete
    // On destructure le body pour récupérer plus facilement toutes les valeurs dans des variables
    const {
      firstname,
      lastname,
      email,
      picture,
      password,
      passwordConfirm
    } = req.body;


    // 2. Vérifier que tous les champs sont remplis
    // Dans le cas contraire, renvoyer un message à l'utilisateur pour lui dire que les champs sont incomplets
    if(!firstname || !lastname || !email || !password || !passwordConfirm) {
      // on ne doit pas oublier faire un return ici pour forcer la méthode handleSignUpFormSubmission
      // à se stopper si jamais on entre dans le if
      return res.render("signup", { errorMessage: "Veuillez remplir tous les champ" });
    }

    // 3. Vérifier que le format de l'email est valide
    // if(!emailValidator.validate(email)) {
    //   return res.render("signup", { errorMessage: "Format d'email non valide" });
    // }

    // Comme à partir d'ici on contacte un service extérieur qui nous renvoie une promesse (l'appel à la DB)
    // on utilise le try / catch pour pouvoir gérer un éventuel rejet de la promesse avec une erreur
    try {
      // 4. Vérifier que l'email sur lequel l'utilisateur souhaite enregistrer n'est pas déjà utilisé dans la DB
      const alreadyExistingUser = await User.findOne({
        where: {
          email
        }
      });

      if(alreadyExistingUser) {
        return res.render("signup", { errorMessage: `L'email ${email} est déjà utilisé` });
      }

      // 5. Vérifier que le couple mdp / confirmation de mdp est bon
      if(password !== passwordConfirm) {
        return res.render("signup", { errorMessage: `La confirmation de mot de passe ne correspond pas au mot de passe renseigné` });
      }

      // 5.bis Si on avait le temps (et le courage), on pourrait aussi vérifier que le MDP répond
      // bien aux critères de la CNIL...

      // 6. Hasher le mot de passe pour qu'il ne soit plus en clair
      const saltRounds = 10; // 10 représente le nombre de "round" de complexité pour générer le salt
      // On génère d'abord un salt qui va permettre de faire en sorte que deux mdp identiques ne donnent pas le meme hash en sortie
      const salt = await bcrypt.genSalt(saltRounds);
      // Ensuite seulement on peut hasher le mdp avec le salt généré (qui sera du coup toujours différent et UNIQUE)
      const hashedPassword = await bcrypt.hash(password, salt);

      // 7. Stocker l'utilisateur en DB avec toutes ses infos
      await User.create({
        firstname,
        lastname,
        email,
        picture,
        password: hashedPassword
      });

      // 8. Rediriger vers la page de login
      res.redirect('/login');

    } catch (error) {
      console.log(error);

      return res.status(500).render("500");
    }
  },

  async handleLoginFormSubmission(req, res) {
    // 1. Récupérer les champs du formulaire
    const { email, password } = req.body;

    // 2. Vérifier que tous les champs du form sont remplis
    if( !email || !password ) {
      return res.render("login", { errorMessage: "Veuillez remplir tous les champ" });
    }

    // 3. Véfifier que le user qui tente de se connecter existe bien en DB
    try {
      const existingUser = await User.findOne({
        where: {
          email
        }
      });

      // Si le user n'existe pas, on renvoie un message à l'utilisateur
      if(!existingUser) {
        return res.render("login", { errorMessage: "Email ou mot de passe incorrect" });
      }

      // 4. Si il existe, comparer le mdp récupéré du form de connexion avec le hash enregistré dans la DB
      const hashedPassword = existingUser.password;

      // On utilise la méthode de bcrypt dédiée pour comparé le mdp du form avec celui qu'on a récup en DB
      // de notre user existant, qui est censé correspondre
      const passwordValidation = await bcrypt.compare(password, hashedPassword);

      // Si le mdp est erroné, on stop tout et on envoie un message à l'utilisateur dans la vue
      if (!passwordValidation) {
        return res.render("login", { errorMessage: "Email ou mot de passe incorrect" });
      }

      // 5. Enregistrer le user dans la session (dans une première version)
      // VERSION AMELIOREE POSSIBLE: on pourrait stocker dans la session uniquement l'id du user
      // et faire un appel en DB pour récupérer les infos dont on a besoin dans un middleware dédié uniquement
      // sur les routes qui en ont besoin
      req.session.user = {
        id: existingUser.id,
        firstname: existingUser.firstname,
        lastname: existingUser.lastname,
        email: existingUser.email,
        // On oublie pas le role pour gérer les accès par la suite
        role: existingUser.role
      };

      // 6. rediriger vers la home
      res.redirect("/");

    } catch (error) {
      console.log(error);

      return res.status(500).render("500");
    }



  },

  logout(req, res) {
    // On supprime le user de la session
    req.session.user = null;
    // et on redirige vers la home
    res.redirect("/");
  }
};

module.exports = new userController();

