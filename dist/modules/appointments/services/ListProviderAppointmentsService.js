"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _ICacheProvider = _interopRequireDefault(require("../../../shared/container/provider/CacheProvider/models/ICacheProvider"));

var _IAppointmentsRepository = _interopRequireDefault(require("../repositories/IAppointmentsRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ListProviderAppointmentsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AppointmentsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('CacheProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IAppointmentsRepository.default === "undefined" ? Object : _IAppointmentsRepository.default, typeof _ICacheProvider.default === "undefined" ? Object : _ICacheProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ListProviderAppointmentsService {
  constructor(appointmentsRepository, cacheProvider) {
    this.appointmentsRepository = appointmentsRepository;
    this.cacheProvider = cacheProvider;
  }

  async execute({
    provider_id,
    day,
    month,
    year
  }) {
    let appointments = await this.cacheProvider.recover(`provider-appointments:${provider_id}:${year}-${month}-${day}`);

    if (!appointments) {
      appointments = await this.appointmentsRepository.findAllInDayFromProvider({
        provider_id,
        month,
        year,
        day
      });
      await this.cacheProvider.save(`provider-appointments:${provider_id}:${year}-${month}-${day}`, (0, _classTransformer.classToClass)(appointments));
    }

    return appointments;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = ListProviderAppointmentsService;
exports.default = _default;