/**
 * @name ipaddress
 * @description Returns true if the value is a valid IP address format
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function ipaddress(value, message) {
  var idx,
    n,
    IPv4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})/,
    IPv6 = /^[0-9a-f]{1,4}$/,
    adr = IPv4.exec(value),
    ok = true;

  if (adr) {
    if (adr.length !== 5) {
      ok = false;
    } else {
      adr = adr.slice(1, 5);
      for (idx = 0; idx < adr.length; idx += 1) {
        n = Number(adr[idx]);
        if (Number.isNaN(n) || n < 0 || n > 255) {
          ok = false;
          break;
        }
      }
    }
  } else if (/^[:0-9a-f-]{1,4}[:-]/.test(value)) {
    ok = true;

    /* convert MS values */
    adr = value.replace(/\.ipv6-literal\.net/, '').replace(/-/g, ':');

    /* normalize the adr */
    adr = adr.replace(/::|--/, ':-EMPTY-:').replace(/^:|:$/g, '').split(':');
    idx = Math.max(adr.indexOf('-EMPTY-'), 0);
    adr = adr.filter(x => x !== '-EMPTY-');
    while (adr.length < 8) {
      adr.splice(idx, 0, '0');
    }

    /* next check each group to make sure it's a valid 4-digit hex value */
    for (idx = 0; idx < adr.length; idx += 1) {
      if (!IPv6.test(adr[idx])) {
        ok = false;
        break;
      }
    }
  } else {
    ok = false;
  }

  return ok ? true : (message || false);
};
