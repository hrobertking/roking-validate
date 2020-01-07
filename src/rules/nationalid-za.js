/**
 * @name nationalid-za
 * @description Returns true if a value mstches the national ID format for ZA
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function nationalidza(value, message) {
  // YYMMDDSSSSCAZ
  // YYMMDD - date of birth
  // SSSS - sequence number
  // C - citizenship: 0 = citizen, 1 = resident
  // A - 8 or 9 (race prior to 1994)
  // Z - checksum
  // example: 8001015009087
  var pattern = /^(\d{2})(\d{2})(\d{2})(\d{4})([01])([89])(\d)$/,
    test = pattern.exec(value),
    parsed = test ? [].slice.call(test) : [],
    yy = Number(parsed[0]),
    mm = Number(parsed[1]),
    dd = Number(parsed[2]),
    nums = (value || '').split(''),
    checksum = Number(nums.pop()),
    cd = 0,
    ok = true;

  parsed.shift();
  if (parsed.length) {
    switch (mm) {
      case 2:
        ok = dd > 0 && dd < (yy % 4 ? 28 : 29);
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        ok = dd > 0 && dd < 31;
        break;
      default:
        ok = dd > 0 && dd < 32;
    }

    /* luhn loops right to left, so reverse the array */
    nums.reverse();

    /* double on an odd index and enfold */
    cd = nums.reduce(function (ttl, val, idx) {
      var n = val * (idx % 2 ? 1 : 2);

      return ttl + (n > 9 ? n - 9 : n);
    }, cd);

    /* calc the check digit */
    cd = 10 - (cd % 10 || 10);

    ok = (checksum === cd);
  }

  return (ok ? true : (message || false));
};
