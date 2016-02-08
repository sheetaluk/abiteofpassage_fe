(function() {
  'use strict';

  angular.module('loci.entry', ['ngRoute', 'loci.authFact'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/entry', {
      templateUrl: 'entry/entry.html',
      controller: 'EntryCtrl'
    });
  }])

  .controller('EntryCtrl', ['$scope', '$location', 'authFact', function($scope, $location, authFact) {

    $scope.FBLogin = function() {
      FB.login(function(response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me?fields=email,name', function(meResponse) {
            console.log('Good to see you, ' + meResponse.name + '.');

            var accessToken = FB.getAuthResponse().accessToken;
            authFact.setAccessToken(accessToken);

            $location.path('/home');
            $scope.$apply();
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'public_profile,email'});
    };

  }]);
}());