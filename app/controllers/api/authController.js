require('dotenv').config();
const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const authDataMapper = require('../../models/authDataMapper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/** Class representing a auth controller. */
class authController extends CoreController {
  static dataMapper = authDataMapper;

  /**
   * create a auth controller
  *
  * @augments CoreController
  */
  constructor() {
    super();
    debug('authController created');
  }

  /**
   * responds with all posts from a given category
   *
   * @param {Object} request
   * @param {Object} response
   */
  async login(request, response) {

    debug(`${this.constructor.name} login`);
    const { email, password } = request.body;

    if (!email || !password) {
      return response.json("login", { errorMessage: "Please fill all the fields" });
    }

    const existingUser = await this.constructor.dataMapper.findByEmail(email);
    if (!existingUser) {
      return response.json("login", { errorMessage: "Incorrect Email or password " });
    }

    const hashedPassword = existingUser.password;
    const passwordValidation = await bcrypt.compare(password, hashedPassword);
    if (!passwordValidation) {
      return response.json("login", { errorMessage: "Incorrect Email or password" });
    }

    const accessTokenSigned = jwt.sign(existingUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
    const refreshTokenSigned = jwt.sign(existingUser, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

    return response.json(accessTokenSigned);
  }
}

module.exports = new authController();