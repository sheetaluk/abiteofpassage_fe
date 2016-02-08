(function() {
  'use strict';

  describe('loci.version module', function() {
    beforeEach(module('loci.version'));

    describe('version service', function() {
      it('should return current version', inject(function(version) {
        expect(version).toEqual('0.1');
      }));
    });
  });
}());
