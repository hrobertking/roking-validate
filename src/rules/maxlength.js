/**
 * @name maxlength
 * @description Returns true if the length of the value evaluated is less than or equal to
 * the maximum length
 *
 * @returns {boolean}
 * @param {string} value
 * @param {number} param
 * @param {string} message
 */
exports.default = function maxlength(value, param, message) {
  var test = (value || '').toString(),
    ok = test.length <= param;

  return (ok ? true : (message || false));
};

