/**
 * @name taxid-sg
 * @description Returns true if the value is a valid tax identifier for Singapore
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function taxidsg(value, message) {
  var pattern = /^(?=.{9}$)(\d*[A-Z]\d*)$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
