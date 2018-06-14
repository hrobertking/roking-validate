/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - nationalidmxcurp', function () {
  it('identifies a valid national id', function () {
    assert.equal(true, validators['nationalid-mx-curp']('HEGG560427MVERRL04'));
  });
  it('identifies an invalid national id - month', function () {
    assert.equal(false, validators['nationalid-mx-curp']('HEGG560027MVERRL04'));
  });
  it('identifies an invalid national id - day', function () {
    assert.equal(false, validators['nationalid-mx-curp']('HEGG570229MVERRL04'));
  });
  it('identifies an invalid national id - Ñ', function () {
    assert.equal(false, validators['nationalid-mx-curp']('HÑGG560427MVERRL04'));
  });
});
