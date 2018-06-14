/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - postcode-us', function () {
  it('identifies a valid post code', function () {
    assert.equal(true, validators['postcode-us']('85250'));
  });
  it('identifies a valid post code - extended', function () {
    assert.equal(true, validators['postcode-us']('85250-1234'));
  });
  it('identifies an invalid post code - alpha', function () {
    assert.equal(false, validators['postcode-us']('ABCDE'));
  });
  it('identifies an invalid post code - incorrect length', function () {
    assert.equal(false, validators['postcode-us']('852'));
  });
  it('identifies an invalid post code - extended', function () {
    assert.equal(false, validators['postcode-us']('85250-12'));
  });
});
