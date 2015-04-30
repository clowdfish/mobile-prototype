(function() {

  'use strict';

  angular
    .module('app.booking')
    .controller('bookingCtrl', bookingCtrl);

  function bookingCtrl($scope, $state, $ionicLoading, $ionicPopover, $window) {
    console.log('a');    
    $ionicPopover.fromTemplateUrl('templates/booking/popover-menu.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
      console.log($scope.popover);
    });
    
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    
    $scope.sync = function() {
      $state.go('booking.list');
    };
    
    $scope.logout = function() {
      $state.go('login');
    };
     
  }

})();
