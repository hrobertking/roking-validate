/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - nationalidus', function () {
  it('identifies a valid national id - ssn', function () {
    assert.equal(true, validators['nationalid-us']('999-99-9999'));
  });
  it('identifies a valid national id - fein', function () {
    assert.equal(true, validators['nationalid-us']('99-9999999'));
  });
  it('identifies an invalid national id', function () {
    assert.equal(false, validators['nationalid-us']('999-9-9999'));
  });
  it('identifies an invalid national id - alpha', function () {
    assert.equal(false, validators['nationalid-us']('9A9-9-9999'));
  });
});
