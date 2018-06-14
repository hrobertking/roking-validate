/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - luhn', function () {
  it('identifies a valid luhn', function () {
    assert.equal(true, validators.luhn('79927398713'));
  });
  it('identifies an invalid luhn', function () {
    assert.equal(false, validators.luhn('79927398710'));
  });
});
