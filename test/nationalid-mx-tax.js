/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - nationalidmxtax', function () {
  it('identifies a valid national id', function () {
    assert.equal(true, validators['nationalid-mx-tax']('AAGB860519G31'));
  });
  it('identifies an invalid national id - month', function () {
    assert.equal(false, validators['nationalid-mx-tax']('AAGB560027G31'));
  });
  it('identifies an invalid national id - day', function () {
    assert.equal(false, validators['nationalid-mx-tax']('AAGB570229G31'));
  });
});
