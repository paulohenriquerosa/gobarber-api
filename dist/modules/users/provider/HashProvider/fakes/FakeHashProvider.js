"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeHashProvider {
  async compareHash(payload, hashed) {
    return payload === hashed;
  }

  async generateHash(payload) {
    return payload;
  }

}

var _default = FakeHashProvider;
exports.default = _default;