/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators,
  testdata = [
    'AB43 9NW',
    'B33 8TH',
    'B37 7NU',
    'B69 3HJ',
    'BA10 0PR',
    'BH1 1JB',
    'BH19 2RZ',
    'BL9 6JJ',
    'BS10 7PQ',
    'BS20 6BF',
    'BS35 2AU',
    'BS48 2JT',
    'BT48 0GF',
    'CB10 2YQ',
    'CH7 5AR',
    'CM1 2QT',
    'CO13 9HU',
    'CR2 6XH',
    'CT11 8AU',
    'CV2 2FX',
    'CV9 2BN',
    'CW2 6EU',
    'CW8 3ET',
    'DE4 5AH',
    'DL16 7YA',
    'DL6 3SS',
    'DN11 0EJ',
    'DN4 5ED',
    'DN40 3JU',
    'DN55 1PT',
    'E16 3TW',
    'EC1A 1BB',
    'EN11 0JJ',
    'G44 3JL',
    'G61 2HZ',
    'G67 4BA',
    'G68 9NU',
    'GB82 3ES',
    'GL1 2EA',
    'GL15 4AG',
    'GU33 6HF',
    'HA7 4HB',
    'IG11 8FF',
    'IM9 1PN',
    'IP14 1PL',
    'IV3 5QA',
    'KY16 0DG',
    'LA1 4DB',
    'LA7 7EF',
    'LE12 9LF',
    'LE3 2DE',
    'M1 1AE',
    'M14 7PU',
    'M33 2AE',
    'M9 8HU',
    'ME13 8AN',
    'N17 8JN',
    'N21 3HG',
    'NE41 8DG',
    'NG8 6LN',
    'NP20 1JB',
    'NR20 5AR',
    'NW11 8RE',
    'NW8 7LE',
    'OL16 4RN',
    'OL4 3PA',
    'OX4 6DF',
    'PE13 1SB',
    'PE15 0XW',
    'PO21 4JP',
    'PO9 2PP',
    'PR4 1SE',
    'PR7 3FN',
    'RG40 3HT',
    'RM1 2BH',
    'SE17 2FT',
    'SG17 5QT',
    'SK15 3AU',
    'SK5 6RS',
    'SK9 1QZ',
    'SN25 4ZA',
    'SO31 5BG',
    'SS13 3RJ',
    'ST16 3ES',
    'ST3 5NT',
    'ST5 0NW',
    'ST5 6EP',
    'SW11 9LS',
    'SY5 6PL',
    'SY5 7HG',
    'SY8 2AS',
    'TQ4 7GG',
    'TQ5 8QX',
    'TS25 5QS',
    'TS5 7QD',
    'TW5 0LH',
    'UB4 0NL',
    'W1A 0AX',
    'W5 4BN',
    'W5 4DL',
    'WF15 8LU',
    'WF4 4QB',
    'WN2 2EB',
    'WN5 0BF',
    'WR2 6HS',
    'WS14 0EU',
    'WS2 8EY',
  ];

describe('validators - postcodeuk', function () {
  it('identifies a valid post code - A9', function () {
    assert.equal(true, validators['postcode-gb']('W5 4DL'));
  });
  it('identifies a valid post code - A99', function () {
    assert.equal(true, validators['postcode-gb']('G82 3ES'));
  });
  it('identifies a valid post code - A9A', function () {
    assert.equal(true, validators['postcode-gb']('W1A 0AX'));
  });
  it('identifies a valid post code - AA9', function () {
    assert.equal(true, validators['postcode-gb']('WN2 2EB'));
  });
  it('identifies a valid post code - AA99', function () {
    assert.equal(true, validators['postcode-gb']('GB82 3ES'));
  });
  it('identifies a valid post code - AA9A', function () {
    assert.equal(true, validators['postcode-gb']('EC1A 1BB'));
  });
  it('identifies an invalid post code - missing space', function () {
    assert.equal(false, validators['postcode-gb']('EC1A 1BB'));
  });
});
