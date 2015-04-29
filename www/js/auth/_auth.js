(function() {

  'use strict';

  angular
    .module('app.auth', [])
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'templates/auth/login.html',
      controller: 'loginCtrl'
    });
  }

})();
