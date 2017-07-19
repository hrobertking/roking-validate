/**
 * @name antipattern
 * @description Validates using the supplied pattern; returns true if the value _DOES NOT MATCH_.
 *
 * @returns {boolean}
 * @param {any} value
 * @param {string} param
 * @param {string} message
 */
exports.default = function antipattern(value, param, message) {
  var test = (value === null) ? '' : value,
    reg = new RegExp(param),
    ok = !reg.test(test);

  return (ok ? true : (message || false));
};

