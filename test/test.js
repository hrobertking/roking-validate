/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js');

describe('Validations Module', function () {
  describe('validators - types defined in __validators', function () {
    it('lists types', function () {
      var valTypes = [
          'antipattern',
          'date',
          'email',
          'iban',
          'in',
          'ipaddress',
          'luhn',
          'max',
          'maxlength',
          'min',
          'minlength',
          'mod7',
          'name',
          'nationalid-hk',
          'nationalid-mx-curp',
          'nationalid-mx-tax',
          'nationalid-us',
          'neq',
          'not-in',
          'number',
          'pattern',
          'postcode-gb',
          'postcode-us',
          'region-mx',
          'required',
        ],
        types = validation.types();

      /* compare types and valTypes */
      assert.deepEqual(types, valTypes);
    });
  });

  describe('validators - validate using rules array', function () {
    it('identifies passing tests', function () {
      var rules = [
          { type: 'antipattern', value: '\\s*[a-z]+' },
          { type: 'date' },
          { type: 'email' },
          { type: 'iban' },
          { type: 'luhn' },
          { type: 'max', value: 10 },
          { type: 'maxlength', value: 3 },
          { type: 'min', value: 10 },
          { type: 'minlength', value: 3 },
          { type: 'mod7' },
          { type: 'name' },
          { type: 'number' },
          { type: 'pattern', value: '\\s*[a-z]+' },
          { type: 'required' },
        ],
        results = validation.validate('hrobertking@cathmhaol.com', rules),
        shouldPass = ['email', 'minlength', 'pattern', 'required'],
        ndx = results.length - 1;

      /* loop through all the results and check against the expected passing tests */
      while (ndx > -1) {
        assert.equal(shouldPass.indexOf(results[ndx].type) > -1, results[ndx].valid);
        ndx -= 1;
      }
    });
  });
});
