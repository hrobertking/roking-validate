/**
 * @name postcode-gb
 * @description Returns true if the value is a valid post code format in GB
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodegb(value, message) {
  /*
  The letters Q, V and X are not used in the first position.
  The letters I, J and Z are not used in the second position.
  The only letters to appear in the third position are
    A, B, C, D, E, F, G, H, J, K, P, S, T, U and W
    when the structure starts with A9A.
  The only letters to appear in the fourth position are
    A, B, E, H, M, N, P, R, V, W, X and Y
    when the structure starts with AA9A.
  The final two letters do not use C, I, K, M, O or V, so as not to
    resemble digits or each other when hand-written.
  */
  var pattern = /^[A-PR-UWYZ](\d(\d|[A-HJKPS-UW])?|[A-HK-Y]\d(\d|[ABEHMNPRVWXY])?)\s\d[ABD-HJLNP-UW-Z]{2}$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
