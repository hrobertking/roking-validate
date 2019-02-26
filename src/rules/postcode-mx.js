/**
 * @name postcode-mx
 * @description Returns true if the value is a valid post code format in MX
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodemx(value, message) {
  var pattern = /^\d{5}$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
