(function() {
  'use strict';

  angular.module('loci.authFact', [])

  .factory('authFact', function() {
    var authfact = {};

    authfact.setAccessToken = function(authToken) {
      authfact.authToken = authToken;
    };

    authfact.getAccessToken = function() {
      return authfact.authToken;
    };

    return authfact;
  });
}());