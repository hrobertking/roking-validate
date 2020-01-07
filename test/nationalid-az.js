/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - nationalidza', function () {
  it('identifies a valid national id', function () {
    assert.equal(true, validators['nationalid-za']('8001015009087'));
  });
  it('identifies an valid national id - leap date of birth', function () {
    assert.equal(false, validators['nationalid-za']('8002295009087'));
  });
  it('identifies an invalid national id - invalid date of birth (date out of range)', function () {
    assert.equal(false, validators['nationalid-za']('8001325009087'));
  });
  it('identifies an invalid national id - invalid date of birth (not leap year)', function () {
    assert.equal(false, validators['nationalid-za']('9902295009087'));
  });
  it('identifies an invalid national id - invalid citizenship', function () {
    assert.equal(false, validators['nationalid-us']('8001015009987'));
  });
  it('identifies an invalid national id - invalid group', function () {
    assert.equal(false, validators['nationalid-us']('8001015009077'));
  });
});
