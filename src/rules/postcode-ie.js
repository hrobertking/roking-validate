/**
 * @name postcode-ie
 * @description Returns true if the value is a valid post code format in IE
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodeid(value, message) {
  var pattern = /^[A-Z0-9]{3} [A-Z0-9]{4}$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
