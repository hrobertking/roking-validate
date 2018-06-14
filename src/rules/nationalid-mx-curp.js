/**
 * @name nationalid-mx-curp
 * @description Returns true if a value mstches the national ID format for MX
 * @requires `region-mx`
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function nationalidmxcurp(value, message) {
  var mx = require('./region-mx.js'),
    pattern = /^([a-z]{4})(\d{2})(\d{2})(\d{2})([hm])([a-z]{2})([a-z]{3})([0-9a-z])(\d)/i,
    match = pattern.exec(value),
    ok = match ? true : false;

  if (match) {
    var initials = match[1],
      dobyy = Number(match[2]),
      dobmm = Number(match[3]),
      dobdd = Number(match[4]),
      gender = match[5],
      state = match[6],
      interior = match[7],
      control = match[8],
      checkdigit = match[9],
      days = [-1, 31, (dobyy % 4 === 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dobmm < 1 || dobmm > 12 || dobdd > days[dobmm] || !mx.default(state)) {
      ok = false;
    }
  }
  
  return (ok ? true : (message || false));
};
