(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('loci', [
    'ngRoute',
    'loci.entry',
    'loci.home',
    'loci.authFact',
    'loci.version'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'entry/entry.html',
      controller: 'EntryCtrl'
    })
    .when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl',
      authenticated: true
    })
    .otherwise('/', {
      templateUrl: 'entry/entry.html',
      controller: 'EntryCtrl'
    });
  }])

  .run(['$rootScope', '$location', 'authFact',
    function($rootScope, $location, authFact) {
      $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (next.$$route.authenticated) {
          var userAuth = authFact.getAccessToken();

          if (!userAuth) {
            $location.path('/');
          }
        }
      });
  }]);

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '458378737701320',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}());
