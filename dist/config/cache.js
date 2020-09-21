"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: 'redis',
  config: {
    redis: {
      host: process.env.RADIS_HOST,
      port: process.env.RADIS_PORT,
      password: process.env.RADIS_PASS || undefined
    }
  }
};
exports.default = _default;