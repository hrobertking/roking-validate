/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - email', function () {
  it('identifies a valid email', function () {
    assert.equal(true, validators.email('hrobertking@cathmhaol.com'));
  });
  it('identifies an invalid email', function () {
    assert.equal(false, validators.email('hrobertking@cathmhaol'));
  });
});
