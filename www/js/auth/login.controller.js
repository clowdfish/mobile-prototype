(function() {

  'use strict';

  angular
    .module('app.auth')
    .controller('loginCtrl', loginCtrl);

  function loginCtrl($state, $scope, authApi) {
    $scope.login = function() {
      authApi
        .login($scope.email, $scope.password)
        .then(function() {
          $state.go('booking.list');
        });
    }
  }

})();
