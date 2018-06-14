/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - neq', function () {
  it('identifies a valid neq number', function () {
    var allowed = 1;

    assert.equal(true, validators.neq(10, allowed));
  });
  it('identifies a valid neq intl number format', function () {
    var allowed = 10;

    assert.equal(true, validators.neq('1.234,56', allowed));
  });
  it('identifies a valid neq date', function () {
    var allowed = new Date(2017, 5, 2);
    allowed = new Date(allowed.getTime() + (allowed.getTimezoneOffset() * -60000));

    assert.equal(true, validators.neq('2017-08-05', allowed));
  });
  it('identifies an invalid neq number', function () {
    var allowed = 1;

    assert.equal(false, validators.neq(1, allowed));
  });
  it('identifies an invalid neq date', function () {
    var allowed = new Date(2017, 4, 31);
    allowed = new Date(allowed.getTime() + (allowed.getTimezoneOffset() * -60000));

    assert.equal(false, validators.neq('2017-05-31', allowed));
  });
});
