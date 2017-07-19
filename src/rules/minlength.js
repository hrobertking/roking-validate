/**
 * @name minlength
 * @description Returns true if the length of the value evaluated is greater or equal to the
 * minimum length
 *
 * @returns {boolean}
 * @param {string} value
 * @param {number} param
 * @param {string} message
 */
exports.default = function minlength(value, param, message) {
  var test = (value || '').toString(),
    ok = test.length >= param;

  return (ok ? true : (message || false));
};

