/**
 * @name postcode-us
 * @description Returns true if the value is a valid post code format in US
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodeus(value, message) {
  var pattern = /^(\d{5}|\d{5}-\d{4})$/,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
