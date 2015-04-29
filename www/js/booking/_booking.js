(function() {

  'use strict';

  angular
    .module('app.booking', [])
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider.state('booking', {
      url: '/booking',
      controller: 'listCtrl',
      templateUrl: 'templates/booking/list.html'
    });
  }
})();
