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
   * responds with all posts from a given category
   *
   * @param {Object} request
   * @param {Object} response
   */
  async modifyMember(request, response) {
    debug(`${this.constructor.name} modifyMember`);
    const { id } = request.params;
    const {
      email,
      password,
      passwordConfirm,
      picture, // = request.file.path,
      firstname,
      lastname,
      pseudo
    } = request.body;
    if(password !== passwordConfirm) {
      return response.json({ errorMessage: `Password does not match with the confirm` });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const results =await this.constructor.dataMapper.modify(id,{
      firstname,
      lastname,
      email,
      pseudo,
      picture,
      password: hashedPassword
    });
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
    const {
      email,
      password,
      passwordConfirm,
      picture,
      firstname,
      lastname,
      pseudo
    } = request.body;
    if(!email || !pseudo || !password || !passwordConfirm) {
      return response.json({ errorMessage: "Please fill all the fields1" });
    }
    if(password !== passwordConfirm) {
      return response.json({ errorMessage: `Password does not match with the confirm` });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const results =await this.constructor.dataMapper.create({
      firstname,
      lastname,
      email,
      pseudo,
      picture,
      password: hashedPassword
    });
    response.json(results);
  }
  /**
  * responds with one entry from a table
  *
  * @param {Object} request
  * @param {Object} response
  */
  async getOneDetails(request, response) {
    debug(`${this.constructor.name} getOneDetails`);
    const { id } = request.params;
    const results = await this.constructor.dataMapper.findByPk(id);
    if (results) {
        return response.json(results);
    }
    return response.status(204).send();
  }
}

module.exports = new MemberController();