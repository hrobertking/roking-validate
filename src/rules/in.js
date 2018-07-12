/**
 * @name in
 * @description Returns true if the value provided is in the list provided
 *
 * @returns {boolean}
 * @param {string} value
 * @param {number[]|string[]} param
 * @param {string} message
 */
exports.default = function isin(value, param, message) {
  var test = (value || '').toString(),
    ok = false,
    c = param.length - 1;

  while (c > -1 && !ok) {
    ok = test === param[c].toString();
    c -= 1;
  }

  return (ok ? true : (message || false));
};
