(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('loci', [
    'ngRoute',
    'loci.entry',
    'loci.version'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/entry'});
  }]);
}());
