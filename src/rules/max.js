var utils = require('../__utils.js');

/**
 * @name max
 * @description Returns true if the value is less than or equal to the maximum.
 *
 * @returns {boolean}
 * @param {date|number|string} value
 * @param {date|number|string} param
 * @param {string} message
 */
exports.default = function max(value, param, message) {
  var test = utils.convertToNum(value),
    boundary = utils.convertToNum(param),
    ok = (test <= boundary);

  return (ok ? true : (message || false));
};

