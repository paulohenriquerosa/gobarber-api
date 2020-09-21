"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeMailProvider {
  constructor() {
    this.messages = [];
  }

  async sendMail(data) {
    this.messages.push(data);
  }

}

var _default = FakeMailProvider;
exports.default = _default;