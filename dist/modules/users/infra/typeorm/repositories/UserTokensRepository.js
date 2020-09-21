"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _UserTokens = _interopRequireDefault(require("../entities/UserTokens"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserTokensRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_UserTokens.default);
  }

  async findByToken(token) {
    const userToken = await this.ormRepository.findOne({
      where: {
        token
      }
    });
    return userToken;
  }

  async generate(user_id) {
    const userToken = this.ormRepository.create({
      user_id
    });
    await this.ormRepository.save(userToken);
    return userToken;
  }

}

var _default = UserTokensRepository;
exports.default = _default;