(function() {
  'use strict';

  describe('loci.entry module', function() {

    beforeEach(module('loci.entry'));

    describe('entry controller', function(){

      it('should be defined', inject(function($controller) {
        var entryCtrl = $controller('EntryCtrl');
        expect(entryCtrl).toBeDefined();
      }));

    });
  });
}());