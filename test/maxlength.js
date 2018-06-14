/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - maxlength', function () {
  it('identifies a valid maxlength', function () {
    var allowed = 3;

    assert.equal(true, validators.maxlength('foo', allowed));
  });
  it('identifies an invalid maxlength', function () {
    var allowed = 3;

    assert.equal(false, validators.maxlength('foofoo', allowed));
  });
});
