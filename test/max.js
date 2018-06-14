/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - max', function () {
  it('identifies a valid max number', function () {
    var allowed = 10;

    assert.equal(true, validators.max(10, allowed));
  });
  it('identifies a valid max intl number format', function () {
    var allowed = 9999;

    assert.equal(false, validators.max('1 991.234,56', allowed));
  });
  it('identifies a valid max date', function () {
    var allowed = new Date(2017, 5, 2);

    assert.equal(true, validators.max('2017-05-31', allowed));
  });
  it('identifies an invalid max number', function () {
    var allowed = 10;

    assert.equal(false, validators.max(100, allowed));
  });
  it('identifies an invalid max date', function () {
    var allowed = new Date(2017, 5, 2);

    assert.equal(false, validators.max('2017-08-05', allowed));
  });
});
