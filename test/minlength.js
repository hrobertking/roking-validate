/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - minlength', function () {
  it('identifies a valid minlength', function () {
    var allowed = 3;

    assert.equal(true, validators.minlength('foo', allowed));
  });
  it('identifies an invalid minlength', function () {
    var allowed = 3;

    assert.equal(false, validators.minlength('f', allowed));
  });
});
