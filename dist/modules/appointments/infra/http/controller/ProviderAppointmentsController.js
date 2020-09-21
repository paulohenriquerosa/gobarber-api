"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListProviderAppointmentsService = _interopRequireDefault(require("../../../services/ListProviderAppointmentsService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderAppointmentsController {
  async index(request, response) {
    const provider_id = request.user.id;
    const {
      month,
      year,
      day
    } = request.query;

    const listProviderAppointments = _tsyringe.container.resolve(_ListProviderAppointmentsService.default);

    const appointment = await listProviderAppointments.execute({
      day: Number(day),
      month: Number(month),
      year: Number(year),
      provider_id
    });
    return response.json((0, _classTransformer.classToClass)(appointment));
  }

}

exports.default = ProviderAppointmentsController;