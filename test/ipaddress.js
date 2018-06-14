/* eslint func-names: 0, prefer-arrow-callback: 0, one-var: 0 */
var assert = require('assert'),
  validation = require('../src/index.js'),
  validators = validation.validators;

describe('validators - ipaddress', function () {
  it('identifies a valid ipv4 address', function () {
    assert.equal(true, validators.ipaddress('127.0.0.1'));
  });
  it('identifies an invalid ipv4 address - range error', function () {
    assert.equal(false, validators.ipaddress('127.257.0.1'));
  });
  it('identifies an invalid ipv4 address - no host', function () {
    assert.equal(false, validators.ipaddress('127.0'));
  });
  it('identifies a valid ipv6 address', function () {
    assert.equal(true, validators.ipaddress('2001:db8:85a3:0:0:8a2e:370:7334'));
  });
  it('identifies an invalid ipv6 address', function () {
    assert.equal(false, validators.ipaddress('2001:db8:85z3:0:0:8a2e:370:7334'));
  });
  it('identifies a valid ipv6 address - simplified', function () {
    assert.equal(true, validators.ipaddress('2001:db8:85a3::8a2e:370:7334'));
  });
  it('identifies an invalid ipv6 address - simplified', function () {
    assert.equal(false, validators.ipaddress('2001:db8::0:8a2e::7334'));
  });
  it('identifies a valid ipv6 address - ms', function () {
    assert.equal(true, validators.ipaddress('2001-db8-85a3-0-0-8a2e-370-7334.ipv6-literal.net'));
  });
  it('identifies an valid ipv6 address - ms simplified', function () {
    assert.equal(true, validators.ipaddress('2001-db8-85a3--8a2e-370-7334.ipv6-literal.net'));
  });
});
