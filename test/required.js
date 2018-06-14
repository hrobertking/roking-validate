/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - required', function () {
  it('identifies a valid required', function () {
    assert.equal(true, validators.required('yes'));
  });
  it('identifies an invalid required', function () {
    assert.equal(false, validators.required(''));
  });
});
