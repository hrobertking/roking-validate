/**
 * @name required
 * @description Returns true if a value is present
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function required(value, message) {
  var test = value,
    ok = Boolean(test);

  return (ok ? true : (message || false));
};

