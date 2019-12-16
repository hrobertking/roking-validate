/**
 * @name postcode-es
 * @description Returns true if the value is a valid post code format in ES
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodees(value, message) {
  var pattern = /^\d{5}$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
