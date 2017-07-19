/**
 * @name date
 * @description Returns true if the value provided is a valid date
 *
 * @returns {boolean}
 * @param {date|number|string} value
 * @param {string} message
 */
exports.default = function date(value, message) {
  var dt = new Date(value),
    ok = !isNaN(dt);

  return (ok ? true : (message || false));
};

