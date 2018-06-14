/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - min', function () {
  it('identifies a valid min number', function () {
    var allowed = 10;

    assert.equal(true, validators.min(10, allowed));
  });
  it('identifies a valid min intl number format', function () {
    var allowed = 10;

    assert.equal(true, validators.min('1.234,56', allowed));
  });
  it('identifies a valid min date', function () {
    var allowed = new Date(2017, 5, 2);
    allowed = new Date(allowed.getTime() + (allowed.getTimezoneOffset() * -60000));

    assert.equal(true, validators.min('2017-08-05', allowed));
  });
  it('identifies an invalid min number', function () {
    var allowed = 10;

    assert.equal(false, validators.min(1, allowed));
  });
  it('identifies an invalid min date', function () {
    var allowed = new Date(2017, 5, 2);
    allowed = new Date(allowed.getTime() + (allowed.getTimezoneOffset() * -60000));

    assert.equal(false, validators.min('2017-05-31', allowed));
  });
});
