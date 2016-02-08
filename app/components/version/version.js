(function() {
  'use strict';

  angular.module('loci.version', [
    'loci.version.interpolate-filter',
    'loci.version.version-directive'
  ])

  .value('version', '0.1');
}());
