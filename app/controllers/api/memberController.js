const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const memberDataMapper = require('../../models/memberDataMapper');
const bcrypt = require('bcrypt');
/** Class representing a member controller. */
class MemberController extends CoreController {
    static dataMapper = memberDataMapper;

    /**
     * create a member controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('memberController created');
    }

    /**
    * create one entry in a table
    *
    * @param {Object} request
    * @param {Object} response
    */
    async createMember(request, response) {
        debug(`${this.constructor.name} create`);
        const results = await this.constructor.dataMapper.create(request.body);
        response.json(results);
    }

  /**
   * responds with all posts from a given category
   *
   * @param {Object} request
   * @param {Object} response
   */
  async handleSignUpForm(request, response) {
    debug(`${this.constructor.name} handleSignUpForm`);
    // const categoryId = request.params.id;
    const {
      firstname,
      lastname,
      email,
      picture,
      pseudo,
      password,
      passwordConfirm
    } = request.body;
    if(!firstname || !lastname || !email || !pseudo ||!password || !passwordConfirm) {
      return response.json({ errorMessage: "Please fill all the fields1" });
    }
    if(password !== passwordConfirm) {
      return response.json({ errorMessage: `Password does not match with the confirm` });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    await this.constructor.dataMapper.create({
      firstname,
      lastname,
      email,
      pseudo,
      picture,
      password: hashedPassword
    });
  }
}

module.exports = new MemberController();