/**
 * @name luhn
 * @description Validates the provided account number using the LUHN algorithm
 *
 * @return {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function luhn(value, message) {
  var nums = value.split(''),
    cd = Number(nums.pop()),
    ttl = 0,
    n = 0,
    c = 0,
    ok;

  /* luhn loops right to left, so reverse the array */
  nums.reverse();

  /* double on an 'odd' index and enfold */
  for (c = 0; c < nums.length; c += 1) {
    n = (parseInt(nums[c], 10) * (c % 2 ? 1 : 2));
    n -= (n > 9 ? 9 : 0);

    ttl += n;
  }

  /* calc the check digit */
  ttl = 10 - (ttl % 10 || 10);

  ok = (cd === ttl);

  return (ok ? true : (message || false));
};

