/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - postcodeuk', function () {
  it('identifies a valid post code - full', function () {
    assert.equal(true, validators['postcode-gb']('GB82 3ES'));
  });
  it('identifies a valid post code - single alpha', function () {
    assert.equal(true, validators['postcode-gb']('G82 3ES'));
  });
  it('identifies a valid post code - single digit', function () {
    assert.equal(true, validators['postcode-gb']('GB2 3ES'));
  });
  it('identifies an invalid post code - missing space', function () {
    assert.equal(false, validators['postcode-gb']('GB823ES'));
  });
});
