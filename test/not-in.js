/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - not-in', function () {
  it('identifies an item not in a list', function () {
    assert.equal(true, validators['not-in']('foo', ['bar', 'snafu']));
    assert.equal(true, validators['not-in'](5, [1, 2, 3, 4]));
  });
});
