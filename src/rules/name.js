/**
 * @name name
 * @description Returns false if the value evaluated contains any special or control characters
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function name(value, message) {
  /* because of the variation in encoding names, it's easier to disallow characters */
  var reg = new RegExp('[!@#$%^*(){}?"~`+=\\f\\n\\r\\t\\v\\0]'),
    test = value,
    ok = !reg.test(test);

  return (ok ? true : (message || false));
};

