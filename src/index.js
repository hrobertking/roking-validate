/**
 * Validation module
 * @author H Robert King <hrobertking@cathmhaol.com>
 * @description Validation methods 
 */

/**
 * @name ValidationRule
 * @type {object}
 * @property {string} message - Optional message to display when validaton fails
 * @property {string} type - One of the properties of the 'validators' object
 * @property {string} value - Required when `type` is max, maxlength, min, minlength, or pattern
 * @property {boolean} valid - Status after validation has been performed. Default: undefined.
 */

/**
 * @name Rule
 * @description Individual validation rule, e.g., `min`, `max`, or attern`
 * @type {function}
 * @see {@link rules|Rule Collection}
 */

var utils = require('./__utils.js'),
  antipattern = require('./rules/antipattern.js'),
  date = require('./rules/date.js'),
  email = require('./rules/email.js'),
  iban = require('./rules/iban.js'),
  luhn = require('./rules/luhn.js'),
  max = require('./rules/max.js'),
  maxlength = require('./rules/maxlength.js'),
  min = require('./rules/min.js'),
  minlength = require('./rules/minlength.js'),
  mod7 = require('./rules/mod7.js'),
  name = require('./rules/name.js'),
  neq = require('./rules/neq.js'),
  number = require('./rules/number.js'),
  pattern = require('./rules/pattern.js'),
  required = require('./rules/required.js');

// eslint-disable-next-line one-var
var validators = {
  antipattern: antipattern.default,
  date: date.default,
  email: email.default,
  iban: iban.default,
  luhn: luhn.default,
  max: max.default,
  maxlength: maxlength.default,
  min: min.default,
  minlength: minlength.default,
  mod7: mod7.default,
  name: name.default,
  neq: neq.default,
  number: number.default,
  pattern: pattern.default,
  required: required.default,
};
exports.validators = validators;

/**
 * @name types
 * @description Returns an array of validator names
 *
 * @returns {string[]}
 */
exports.types = function getTypes() {
  return Object.keys(validators);
};

/**
 * @name validate
 * @description Validates a value given an array of ValidationRule objects and returns
 * the array with the `valid` property set
 *
 * @returns {ValidationRule[]}
 * @param {any} value
 * @param {ValidationRule[]} rules
 */
exports.validate = function validateAll(value, rules) {
  var validated = rules,
    ndx = validated.length - 1,
    check;

  /**
   * @private
   * Validate that the specified rule exists and everything is configured correctly.
   *
   * @returns {function}
   * @param {object} ruleDef
   */
  function getRule(ruleDef) {
    var func = null;

    /* check for a null or undefined rule definition */
    if (ruleDef) {
      /* check that the rule is defined as a callable validator */
      if (typeof ruleDef === 'object' && typeof validators[ruleDef.type] === 'function') {
        func = validators[ruleDef.type];

        /* if the function has a 'param' parameter defined, the rule needs a 'value' property */
        if (utils.getParamNames(validators[ruleDef.type]).indexOf('param') > -1) {
          if (typeof ruleDef.value === 'undefined') {
            func = null;
          }
        }
      }
    }

    return func;
  }

  while (ndx > -1) {
    check = getRule(validated[ndx]);

    /* if we get a callable validator, use it */
    validated[ndx].valid = (check && check.call) ?
      check(value, validated[ndx].value, validated[ndx].message) :
      null;

    ndx -= 1;
  }

  return validated;
};

