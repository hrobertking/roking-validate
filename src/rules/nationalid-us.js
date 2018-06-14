/**
 * @name nationalid-us
 * @description Returns true if a value mstches the national ID format for US
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function nationalidus(value, message) {
  var FEIN = /^\d{2}-\d{7}$/,
    SSN = /^\d{3}-\d{2}-\d{4}$/,
    test = value,
    ok = FEIN.test(test) || SSN.test(test);

  return (ok ? true : (message || false));
};
