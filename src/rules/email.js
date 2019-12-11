/**
 * @name email
 * @description Returns true if the value evaluated matches the pattern
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function email(value, message) {
  var reg = /^("[\w!#$%&*+/=?^`{}|~.><\x27 -]{1,62}"|[\w!#$%&*+/=?^`{}|~.><\x27-]{1,64})@([^\W_]?[a-z\d\-]{0,63}[a-z\d]\.){0,126}([^\W_]?[a-z\d\-]{0,63}[a-z\d])$/i,
    test = value,
    ok = reg.test(test);

  return (ok ? true : (message || false));
};

