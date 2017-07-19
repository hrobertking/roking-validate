/**
 * @name email
 * @description Returns true if the value evaluated matches the pattern
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function email(value, message) {
  var reg = new RegExp('^[\\w!#$%&"*+/=?^`{}|~.><\\x27-]+@((([a-z0-9]+-?)+\\.)+([a-z0-9]+))', 'i'),
    test = value,
    ok = reg.test(test);

  return (ok ? true : (message || false));
};

