/**
 * @name iban
 * @description Validates an IBAN
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function iban(value, message) {
  var reg = new RegExp('^([a-z]{2})\\s*(\\d{2})\\s*([a-z\\d\\s]{1,30})$', 'i'),
    test = value,
    cd = '',
    nibble = '',
    ok = false;

  /* translate alpha to number */
  function tr(cv) {
    return ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(cv.toUpperCase()) + 10).toString();
  }

  if (reg.test(test)) {
    /* shift country and check digits and translate to a number */
    test = (value.substr(4) + value.substr(0, 4)).replace(/\s*/g, '').replace(/\D/g, tr);

    /* loop through to handle a 30-digit number */
    while (test.length) {
      nibble = cd;
      cd = (parseInt((cd + test).substr(0, 9), 10) % 97).toString();
      test = (nibble + test).substr(9);
    }

    ok = (cd === '1');
  }

  return (ok ? true : (message || false));
};

