/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - number', function () {
  it('identifies a valid number', function () {
    assert.equal(true, validators.number('10'));
  });
  it('identifies an invalid number', function () {
    assert.equal(false, validators.number('abc'));
  });
});
