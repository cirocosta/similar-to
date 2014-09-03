'use strict';

var assert = require('assert');
var similarTo = require('./main.js');


describe('SimilarTo,', function () {

  it('should be sane', function () {
    assert(!!similarTo);
  });

  describe('FullSimilarity,', function () {
    describe('empty objects', function () {
      it('should be equal if both undefined', function () {
        assert(similarTo(undefined, undefined));
      });
    });

    describe('non-empty objects', function () {
      it('should return true to identical objs', function () {
        var a = {a: 'a'};
        var b = {a: 'a'};

        assert(similarTo(a, b));
      });

      it('should return true to similar 1level objects', function () {
        var a = {a: 'a'};
        var b = {a: 'b'};

        assert(similarTo(a, b));
      });

      it('should return false to non-similar objects', function () {
        var a = {a: 'a'};
        var b = {b: 'b'};

        assert(!similarTo(a, b));
      });

      it('should return true to 2layer similar objects', function () {
        var a = {a: {b: 'b'}};
        var b = {a: {b: 'c'}};

        assert(similarTo(a, b));
      });

      it('should return false to non-similar 2layer objects', function () {
        var a = {a: {b: 'a'}};
        var b = {a: {c: 'c'}};

        assert(!similarTo(a, b));
      });

      it('should return false if one of them doesnt has all fields', function () {
        var a = {a: {b: 'a'}};
        var b = {a: {}};

        assert(!similarTo(a, b));
      });
    });
  });

  describe('PartialSimilarity,', function () {
    it('should return true if A === B', function () {
      var a = {a: '', b: ''};
      var b = {a: '', b: ''};

      assert(similarTo(b, a, true));
    });

    it('should return true if A contains B', function () {
      var a = {a: '', b: ''};
      var b = {a: ''};

      assert(similarTo(b, a, true));
    });
  });

});
