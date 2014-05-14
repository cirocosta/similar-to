var assert = require('assert');
var similarTo = require('./main.js');
var _ = require('underscore');

var partiallySimilar = similarTo.partiallySimilar;
var fullySimilar = similarTo.fullySimilar;


describe('from SimilarTo,', function () {

  describe('fullySimilar,', function () {
    it('should be sane', function () {
      assert(!!fullySimilar);
    });

    describe('empty objects', function () {
      it('should be equal if both undefined', function () {
        assert(fullySimilar(undefined, undefined));
      });
    });

    describe('non-empty objects', function () {
      it('should return true to identical objs', function () {
        var a = {a: 'a'};
        var b = {a: 'a'};

        assert(fullySimilar(a, b));
      });

      it('should return true to similar 1level objects', function () {
        var a = {a: 'a'};
        var b = {a: 'b'};

        assert(fullySimilar(a, b));
      });

      it('should return false to non-similar objects', function () {
        var a = {a: 'a'};
        var b = {b: 'b'};

        assert(!fullySimilar(a, b));
      });

      it('should return true to 2layer similar objects', function () {
        var a = {a: {b: 'b'}};
        var b = {a: {b: 'c'}};

        assert(fullySimilar(a, b));
      });

      it('should return false to non-similar 2layer objects', function () {
        var a = {a: {b: 'a'}};
        var b = {a: {c: 'c'}};

        assert(!fullySimilar(a, b));
      });

      it('should return false if one of them doesnt has all fields', function () {
        var a = {a: {b: 'a'}};
        var b = {a: {}};

        assert(!fullySimilar(a, b));
      });
    });
  });

  describe('PartiallySimilar,', function () {
    it('should be sane', function () {
      assert(!!partiallySimilar);
    });

    it('should return true if A === B', function () {
      var a = {a: '', b: ''};
      var b = {a: '', b: ''};

      assert(partiallySimilar(b, a));
    });

    it('should return true if A contains B', function () {
      var a = {a: '', b: ''};
      var b = {a: ''};

      assert(partiallySimilar(b, a));
    });


  });

});
