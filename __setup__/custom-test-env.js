const Environment = require('jest-environment-jsdom');

module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup();

    if (typeof global.TextEncoder === 'undefined') {
      const { TextEncoder, TextDecoder } = require('util');
      global.TextEncoder = TextEncoder;
      global.TextDecoder = TextDecoder;
    }
  }
};