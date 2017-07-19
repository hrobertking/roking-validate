/**
 * @private
 * @description Splits the specified string at the specified index
 *
 * @returns {string[]}
 * @param {string} s - the string to split
 * @param {number} i - the zero-based index at which to split
 */
function chomp(s, i) {
  var r = [];
  r[0] = s.substr(0, i);
  r[1] = s.substr(i);

  return r;
}
exports.splitAt = chomp;

/**
 * @private
 * @description Converts a value to a number. When converting date, timezone offset is not used.
 *
 * @returns {number}
 * @param {date|number|string} num
 */
function convertToNum(num) {
  var flt = 0,
    isNum = /^[0-9.,]+$/.test(num);

  /* normalize a formatted number string */
  function normalize(n) {
    var comma = n.lastIndexOf(','),
      dot = n.lastIndexOf('.'),
      sp = n.lastIndexOf(' '),
      rightmost = Math.max(comma, dot, sp),
      seps = /[\s,.]/g,
      grps = n.split(seps).length,
      normalized = n;

    /* if there is a group separator and a decimal separator */
    if ((comma > -1 && dot > -1) ||
         (comma > -1 && sp > -1) ||
         (dot > -1 && sp > -1)) {
      normalized = chomp(n, rightmost);
      normalized.forEach((v, i, a) => {
        var ref = a;
        ref[i] = v.replace(seps, '');
      });
      normalized = normalized.join('.');
    /* if there are only group separators */
    } else if (grps > 2) {
      normalized = n.replace(seps, '');
    /* if there is only one separator, assume it's a decimal separator */
    } else if (grps === 2) {
      normalized = n.replace(seps, '.');
    }

    return parseFloat(normalized);
  }

  if (num instanceof Date) {
    /* if it's already a date, return the ms */
    flt = num.getTime();
  } else if (typeof num === 'string' && !isNum) {
    /* if it's a number string with more in it than group and decimal try to convert it */
    flt = new Date(num);
    /* if it doesn't convert to a date using native js, try to parse it */
    flt = isNaN(flt) ? normalize(num) : flt.getTime();
  } else if (typeof num === 'string') {
    flt = normalize(num);
  } else {
    flt = num;
  }

  return flt;
}
exports.convertToNum = convertToNum;

/**
 * @private
 * Returns the names of the parameters of a function
 *
 * @returns {string[]}
 * @param {function} func
 */
function getParamNames(func) {
  /* get the function as a string */
  var str = func.toString(),
    params;

  /**
   * read everything up to the first brace, and replace
   * key stuff we know in the string
   */
  str = str.substr(0, str.indexOf('{'))
    .replace(func.name, '')
    .replace(/\s*function\s*/, '')
    .replace(/^\s*|\s*$/g, '')
    .replace(/\(/g, '["')
    .replace(/\)/g, '"]')
    .replace(/,/g, '","');

  params = JSON.parse(str);
  params.forEach((v, i) => {
    params[i] = v.replace(/^\s*|\s*$/g, '');
  });

  return params;
}
exports.getParamNames = getParamNames;

