/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - name', function () {
  it('identifies a valid name', function () {
    assert.equal(true, validators.name('Robert King'));
  });
  it('identifies an invalid name', function () {
    assert.equal(false, validators.name('@hrking'));
  });
});
