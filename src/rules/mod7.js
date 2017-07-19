/**
 * @name mod7
 * @description Returns true if the value check digit matches the mod-7 algorithm
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function mod7(value, message) {
  var test = value.split(''),
    cd = parseInt(test.pop(), 10),
    ttl = 0,
    n = 0,
    ok;

  /* sum n-1 */
  for (n = 0; n < test.length; n += 1) {
    ttl += parseInt(test[n], 10);
  }

  ok = (ttl % 7) === cd;

  return (ok ? true : (message || false));
};

