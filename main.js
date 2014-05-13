var _ = require('underscore');

function isSimilarTo (a, b) {

    if (a === b) return true;

    var keysA = Object.keys(a);
    var keysB = Object.keys(b);

    if (!_.isEqual(keysA, keysB)) return false;

    for (var key in keysA) {
        isSimilarTo(a[key], b[key]);
    }

    return true;
}

module.exports = isSimilarTo;
