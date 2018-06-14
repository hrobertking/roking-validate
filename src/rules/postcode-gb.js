/**
 * @name postcode-gb
 * @description Returns true if the value is a valid post code format in GB
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodegb(value, message) {
  var pattern = /^([a-z]{1}[a-z\d]{1,3})\s(\d[a-z]{2})$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
