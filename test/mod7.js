/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - mod7', function () {
  it('identifies a valid mod7', function () {
    assert.equal(true, validators.mod7('01234567893'));
  });
  it('identifies an invalid mod7', function () {
    assert.equal(false, validators.mod7('01234567890'));
  });
});
