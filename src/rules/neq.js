var utils = require('../__utils.js');

/**
 * @name neq
 * @description Returns true if the value is not equal.
 *
 * @returns {boolean}
 * @param {date|number|string} value
 * @param {date|number|string} param
 * @param {string} message
 */
exports.default = function neq(value, param, message) {
  /* eslint-disable eqeqeq */
  var test = utils.convertToNum(value),
    boundary = utils.convertToNum(param),
    ok = (test != boundary);

  return (ok ? true : (message || false));
};

