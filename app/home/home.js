(function() {
  'use strict';

  angular.module('loci.home', ['ngRoute'])

  .controller('HomeCtrl', function($scope) {
          $scope.home = "home";    
  });
}());