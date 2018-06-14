/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - nationalid-hk', function () {
  it.skip('identifies a valid national id - without check-digit', function () {
    assert.equal(true, validators['nationalid-hk']('E364912'));
  });
  it.skip('identifies a valid national id - short format', function () {
    assert.equal(true, validators['nationalid-hk']('E364912(5)'));
  });
  it.skip('identifies a valid national id - long format', function () {
    assert.equal(true, validators['nationalid-hk']('AE364911(A)'));
  });
  it.skip('identifies a valid national id - normalized format', function () {
    assert.equal(true, validators['nationalid-hk']('AE3649020'));
  });
  it.skip('identifies an invalid national id', function () {
    assert.equal(false, validators['nationalid-hk']('999999'));
  });
});
