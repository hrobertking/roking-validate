/**
 * @name email
 * @description Returns true if the value evaluated matches the pattern
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function email(value, message) {
  var reg = /^[a-z\d!#$%&'*+/=?^`{|}~]{1,}([a-z\d!#$%&'*+/=?^`{|}~]*|\u002e(?!\u002e))*[a-z\d!#$%&'*+/=?^`{|}~]{1,}@[a-z\d\-.]{0,63}[a-z\d]\.[a-z\d\-]{0,63}[a-z\d]$/i,
    test = value,
    ok = reg.test(test);

  return (ok ? true : (message || false));
};

