/**
 * @name postcode-no
 * @description Returns true if the value is a valid post code format in NO
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodeno(value, message) {
  var pattern = /^\d{4}$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
