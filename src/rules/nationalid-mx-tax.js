/**
 * @name nationalid-mx-tax
 * @description Returns true if a value mstches the national tax ID format for MX
 * @requires `region-mx`
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function nationalidmxtax(value, message) {
  var individual = /^(\w{4})(\d{2})(\d{2})(\d{2})(\w{3})/i.exec(value),
    legal = /^(\w{3})(\d{2})(\d{2})(\d{2})(\w{3})/i.exec(value),
    ok = individual || legal;

  /* validate date part */
  if (ok) {
    var dobyy = Number((individual || legal)[2]),
      dobmm = Number((individual || legal)[3]),
      dobdd = Number((individual || legal)[4]),
      days = [-1, 31, (dobyy % 4 === 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dobmm < 1 || dobmm > 12 || dobdd > days[dobmm]) {
      ok = false;
    }
  }

  return ok ? true : (message || false);
};
