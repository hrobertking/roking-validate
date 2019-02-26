/**
 * @name postcode-de
 * @description Returns true if the value is a valid post code format in DE
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodede(value, message) {
  var pattern = /^\d{5}$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
