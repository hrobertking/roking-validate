/**
 * @name taxid-us
 * @description Returns true if the value is a valid tax id format for US
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function taxidus(value, message) {
  var pattern = /^(\d{3}[- ]\d{2}[- ]\d{4}|\d{2}[- ]\d{7}|\d{9})$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
