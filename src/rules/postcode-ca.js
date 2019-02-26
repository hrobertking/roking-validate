/**
 * @name postcode-ca
 * @description Returns true if the value is a valid post code format in CA
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function postcodeca(value, message) {
  var pattern = /^[A-CEG-HJ-NPR-TVXY]\d[A-CEG-HJ-NPR-TV-Z] \d[A-CEG-HJ-NPR-TV-Z]\d$/i,
    test = value,
    ok = pattern.test(test);

  return ok ? true : (message || false);
};
