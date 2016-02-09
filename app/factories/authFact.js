(function() {
  'use strict';

  angular.module('loci.authFact', ['ngCookies'])

  .factory('authFact', ['$cookies', function($cookies) {
    var authfact = {};

    authfact.setAccessToken = function(authToken) {
      $cookies.put('abop_fb_auth_token', authToken);
    };

    authfact.getAccessToken = function() {
      return $cookies.get('abop_fb_auth_token');
    };

    authfact.setUserObj = function(userObj) {
      $cookies.putObject('abop_fb_user_obj', userObj);
    };

    authfact.getUserObj = function() {
      var userObj = {};

      if ($cookies.get('abop_fb_user_obj')) {
        userObj = $cookies.getObject('abop_fb_user_obj');
      }
      return userObj;
    };

    return authfact;
  }]);
}());