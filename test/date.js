/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - date', function () {
  it('identifies a valid date', function () {
    assert.equal(true, validators.date('2017-06-01'));
  });
  it('identifies an invalid date', function () {
    assert.equal(false, validators.date('0314e-2'));
  });
});
