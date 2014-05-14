function fullySimilar (a, b) {
  'use strict';
  var _ = require('underscore');
  var keysA, keysB;

  if (!(_.isObject(a) && _.isObject(b)))
    return true;

  if (_.isEqual(a, b)) return true;

  keysA = Object.keys(a);
  keysB = Object.keys(b);

  if (!_.isEqual(keysA, keysB)) return false;

  for (var key in keysA)
    return fullySimilar(a[keysA[key]], b[keysA[key]]);
}

// TODO
function partiallySimilar (a, b) {
  'use strict';
  var _ = require('underscore');

  if (_.isEqual(a, b)) return true;

  return false;
}

module.exports = {
  fullySimilar: fullySimilar,
  partiallySimilar: partiallySimilar
};
