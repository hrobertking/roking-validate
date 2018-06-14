/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - antipattern', function () {
  it('identifies an valid antipattern', function () {
    assert.equal(true, validators.antipattern('123', '^\\s*[a-z]+'));
  });
  it('identifies a invalid antipattern', function () {
    assert.equal(false, validators.antipattern('abc', '^\\s*[a-z]+'));
  });
});
