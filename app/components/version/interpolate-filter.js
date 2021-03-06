(function() {
  'use strict';

  angular.module('loci.version.interpolate-filter', [])

  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
}());
