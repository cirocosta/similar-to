'use strict';

var _ = require('underscore');

/**
 * Verifies if an object is similar to another,
 * i.e, it contains the fields that the other
 * contains (or at least partially, if specified
 * in the 3rd param)
 * @param {Object} a the test object
 * @param {Object} b the example object
 * @param {Boolean} partial if the check should
 * be for partial similarity
 * @return {Boolean}   if it is partially
 * similar or not
 */
function similarTo (a, b, partial) {
  if (!(_.isObject(a) && _.isObject(b)) || _.isEqual(a, b))
    return true;

  var keysA, keysB;

  keysA = Object.keys(a);
  keysB = Object.keys(b);

  if (!partial)
    if (!_.isEqual(keysA, keysB))
      return false;
  else
    if (_.intersection(keysA, keysB) >= keysB.length)
      return false;

  for (var key in keysA)
    return similarTo(a[keysA[key]], b[keysA[key]], partial);

  return false;
}

module.exports = similarTo;
