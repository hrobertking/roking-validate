/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - in', function () {
  it('identifies an item in a list', function () {
    assert.equal(true, validators.in('foo', ['bar', 'foo', 'snafu']));
    assert.equal(true, validators.in(5, [1, 2, 3, 4, 5]));
  });
});
