/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - pattern', function () {
  it('identifies a valid pattern', function () {
    assert.equal(true, validators.pattern('abc', '^\\s*[a-z]+'));
  });
  it('identifies an invalid pattern', function () {
    assert.equal(false, validators.pattern('123', '^\\s*[a-z]+'));
  });
});
