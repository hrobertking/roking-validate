/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('Validations Module', function () {
  describe('validators - antipattern', function () {
    it('identifies an valid antipattern', function () {
      assert.equal(true, validators.antipattern('123', '^\\s*[a-z]+'));
    });
    it('identifies a invalid antipattern', function () {
      assert.equal(false, validators.antipattern('abc', '^\\s*[a-z]+'));
    });
  });
  describe('validators - date', function () {
    it('identifies a valid date', function () {
      assert.equal(true, validators.date('2017-06-01'));
    });
    it('identifies an invalid date', function () {
      assert.equal(false, validators.date('0314e-2'));
    });
  });
  describe('validators - email', function () {
    it('identifies a valid email', function () {
      assert.equal(true, validators.email('hrobertking@cathmhaol.com'));
    });
    it('identifies an invalid email', function () {
      assert.equal(false, validators.email('hrobertking@cathmhaol'));
    });
  });
  describe('validators - iban', function () {
    it('identifies a valid iban', function () {
      assert.equal(true, validators.iban('GB82 WEST 1234 5698 7654 32'));
    });
    it('identifies an invalid iban', function () {
      assert.equal(false, validators.iban('GB82 WEST 1234 5698 7654 31'));
    });
  });
  describe('validators - luhn', function () {
    it('identifies a valid luhn', function () {
      assert.equal(true, validators.luhn('79927398713'));
    });
    it('identifies an invalid luhn', function () {
      assert.equal(false, validators.luhn('79927398710'));
    });
  });
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
  describe('validators - maxlength', function () {
    it('identifies a valid maxlength', function () {
      var allowed = 3;

      assert.equal(true, validators.maxlength('foo', allowed));
    });
    it('identifies an invalid maxlength', function () {
      var allowed = 3;

      assert.equal(false, validators.maxlength('foofoo', allowed));
    });
  });
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
  describe('validators - minlength', function () {
    it('identifies a valid minlength', function () {
      var allowed = 3;

      assert.equal(true, validators.minlength('foo', allowed));
    });
    it('identifies an invalid minlength', function () {
      var allowed = 3;

      assert.equal(false, validators.minlength('f', allowed));
    });
  });
  describe('validators - mod7', function () {
    it('identifies a valid mod7', function () {
      assert.equal(true, validators.mod7('01234567893'));
    });
    it('identifies an invalid mod7', function () {
      assert.equal(false, validators.mod7('01234567890'));
    });
  });
  describe('validators - name', function () {
    it('identifies a valid name', function () {
      assert.equal(true, validators.name('Robert King'));
    });
    it('identifies an invalid name', function () {
      assert.equal(false, validators.name('@hrking'));
    });
  });
  describe('validators - number', function () {
    it('identifies a valid number', function () {
      assert.equal(true, validators.number('10'));
    });
    it('identifies an invalid number', function () {
      assert.equal(false, validators.number('abc'));
    });
  });
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
  describe('validators - pattern', function () {
    it('identifies a valid pattern', function () {
      assert.equal(true, validators.pattern('abc', '^\\s*[a-z]+'));
    });
    it('identifies an invalid pattern', function () {
      assert.equal(false, validators.pattern('123', '^\\s*[a-z]+'));
    });
  });
  describe('validators - required', function () {
    it('identifies a valid required', function () {
      assert.equal(true, validators.required('yes'));
    });
    it('identifies an invalid required', function () {
      assert.equal(false, validators.required(''));
    });
  });

  describe('validators - types defined in __validators', function () {
    it('lists types', function () {
      var valTypes = [
          'antipattern',
          'date',
          'email',
          'iban',
          'luhn',
          'max',
          'maxlength',
          'min',
          'minlength',
          'mod7',
          'name',
          'neq',
          'number',
          'pattern',
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
        assert.equal(shouldPass.includes(results[ndx].type), results[ndx].valid);
        ndx -= 1;
      }
    });
  });
});

