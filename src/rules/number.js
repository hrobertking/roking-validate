var utils = require('../__utils.js');

/**
 * @name number
 * @description Returns true if the value evaluated is a number
 *
 * @returns {boolean}
 * @param {any} value
 * @param {string} message
 */
exports.default = function number(value, message) {
  var test = utils.convertToNum(value),
    ok = !isNaN(test);

  return (ok ? true : (message || false));
};

