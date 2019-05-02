/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - swift', function () {
  it('identifies a valid swift', function () {
    assert.equal(true, validators.swift('AAAAUS12DDD'));
  });
  it('identifies an invalid swift', function () {
    assert.equal(false, validators.required('1234US12DDD'));
  });
});
