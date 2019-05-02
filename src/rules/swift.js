/**
 * @name swift
 * @description Validates a Society for Worldwide Interbank Financial Telecommunication (Swift) code
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function swift(value, message) {
  var reg = new RegExp('^([a-z]{4})([a-z]{2})([a-z\\d]{2})([a-z\\d]{3})?$', 'i'),
    test = reg.exec(value),
    ok = !!test,
    bankCode, countryCode, locationCode, branchCode;

  if (ok) {
    bankCode = test[1];
    countryCode = test[2]; // ISO 3166-1 alpha-2
    locationCode = test[3];
    branchCode = test[4];
  }
  
  return (ok ? true : (message || false));
};

