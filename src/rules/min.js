var utils = require('../__utils.js');

/**
 * @name min
 * @description Returns true if the value is greater than or equal to the minimum.
 *
 * @returns {boolean}
 * @param {date|number|string} value
 * @param {date|number|string} param
 * @param {string} message
 */
exports.default = function min(value, param, message) {
  var test = utils.convertToNum(value),
    boundary = utils.convertToNum(param),
    ok = (test >= boundary);

  return (ok ? true : (message || false));
};

