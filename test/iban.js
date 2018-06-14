/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - iban', function () {
  it('identifies a valid iban', function () {
    assert.equal(true, validators.iban('GB82 WEST 1234 5698 7654 32'));
  });
  it('identifies an invalid iban', function () {
    assert.equal(false, validators.iban('GB82 WEST 1234 5698 7654 31'));
  });
});
