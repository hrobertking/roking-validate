/**
 * @name postcode-gb
 * @description Returns true if the value is a valid post code format in GB
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodegb(value, message) {
  var pattern = /^(([A-PR-UWYZ]{1,2})(?=.{1,2})(\d{1,2}[A-HK-Y]?)\s(\d)([A-BD-HJLNP-UW-Z]{2}))$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
