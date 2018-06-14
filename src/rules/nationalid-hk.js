/**
 * @name nationalid-hk
 * @description Returns true if a value mstches the national ID format for HK
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function nationalidhk(value, message) {
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    code,
    num = 0,
    numI = 2,
    nums,
    pattern = /^([a-z]{1,2})(\d{6})\(?([a-z\d]?)\)?$/i,
    test = value,
    ok = pattern.exec(test);

  /* if it passes the pattern, and it has a check-digit, run the check-digit test */
  if (ok && ok[3]) {
    code = ((alpha.indexOf(ok[1].substr(-1).toUpperCase()) + 1) * 8) +
      (ok[1].length === 2 ? 8 : 0);

    /* calculate the numeric valueof the number */
    nums = ok[2].split('');
    while (nums.length) {
      num += numI * nums.pop();
      numI += 1;
    }

    /* calculate the product */
    num = (code + num) % 11;

    /* calculate the check digit */
    num = 11 - num;

    /* compare check-digit to passed value */
    if (num < 10) {
      ok = ok[3].toUpperCase() === num.toString();
    } else if (num === 10) {
      ok = ok[3].toUpperCase() === 'A';
    } else {
      ok = ok[3] === '0';
    }
  }

  return (ok ? true : (message || false));
};

