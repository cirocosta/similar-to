var assert = require('assert');
var isSimilarTo = require('./main.js');
var _ = require('underscore');


describe('SimilarTo', function () {

    it('should be sane', function () {
        assert(!!isSimilarTo);
    });

    describe('empty objects', function () {
        it('should be equal if both undefined', function () {
            assert(isSimilarTo(undefined, undefined));
        });

        it('should return true to identical objs', function () {
            var a = {a: 'a'};
            var b = {a: 'a'};

            assert(isSimilarTo(a,b));
        });

        it('should return true to similar objects', function () {
            var a = {a: 'a'};
            var b = {a: 'b'};

            assert(isSimilarTo(a,b));
        });

        it('should return false to non-similar objects', function () {
            var a = {a: 'a'};
            var b = {b: 'b'};

            assert(!isSimilarTo(a,b));
        });

        it('should return true to 2layer similar objects', function () {
            var a = {a: {b: 'b'}};
            var b = {a: {b: 'c'}};

            assert(isSimilarTo(a,b));
        });

        it('should return false to non-similar 2layer objects', function () {
            var a = {a: {b: 'a'}};
            var b = {a: {c: 'c'}};

            assert(!isSimilarTo(a,b));
        });
    });

});
