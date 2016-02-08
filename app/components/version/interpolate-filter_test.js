(function() {
  'use strict';

  describe('loci.version module', function() {
    beforeEach(module('loci.version'));

    describe('interpolate filter', function() {
      beforeEach(module(function($provide) {
        $provide.value('version', 'TEST_VER');
      }));

      it('should replace VERSION', inject(function(interpolateFilter) {
        expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
      }));
    });
  });
}());
