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
      return response.status(401).json("login", { errorMessage: "Please fill all the fields" });
    }

    const existingUser = await this.constructor.dataMapper.findByEmail(email);
    if (!existingUser) {
      return response.status(401).json("login", { errorMessage: "Incorrect Email or password " });
    }

    const hashedPassword = existingUser.password;
    const passwordValidation = await bcrypt.compare(password, hashedPassword);
    
    if (!passwordValidation) {
      return response.status(401).json("login", { errorMessage: "Incorrect Email or password " });
    }
    const accessTokenSigned = jwt.sign({id: existingUser.id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });
    const refreshTokenSigned = jwt.sign({id: existingUser.id}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });

    return response.status(201).json({ accessToken: accessTokenSigned, refreshToken: refreshTokenSigned });
  }
}

module.exports = new authController();

