(function() {
  'use strict';

  angular.module('loci.home', ['ngRoute', 'loci.authFact'])

  .controller('HomeCtrl', ['$scope', 'authFact', function($scope, authFact) {
    $scope.home = authFact.getUserObj();
  }]);
}());