/**
 * @name pattern
 * @description Validates using the supplied pattern.
 *
 * @returns {boolean}
 * @param {any} value
 * @param {string} param
 * @param {string} message
 */
exports.default = function pattern(value, param, message) {
  var test = (value === null) ? '' : value,
    reg = new RegExp(param),
    ok = reg.test(test);

  return (ok ? true : (message || false));
};

