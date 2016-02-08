(function() {
  'use strict';

  angular.module('loci.entry', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/entry', {
      templateUrl: 'entry/entry.html',
      controller: 'EntryCtrl'
    });
  }])

  .controller('EntryCtrl', function($scope) {

    $scope.FBLogin = function() {
      FB.login(function(response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me?fields=email,name', function(meResponse) {
            console.log('Good to see you, ' + meResponse.name + '.');

            var accessToken = FB.getAuthResponse().accessToken;
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'public_profile,email'});
    };

  });
}());