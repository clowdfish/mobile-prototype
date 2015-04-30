(function() {

  'use strict';

  angular
    .module('app.booking')
    .controller('bookingCtrl', bookingCtrl);

  function bookingCtrl($scope, $state, $ionicLoading, $ionicPopover, $ionicHistory, menuData) {
    $scope.menuData = menuData;           
    $ionicPopover.fromTemplateUrl('templates/booking/popover-menu.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;      
    });
    
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    
    $scope.sync = function() {
      $scope.popover.hide();
      $state.go('booking.list');
    };
    
    $scope.logout = function() {
      $scope.popover.hide();
      $state.go('login');
    };
    
    $scope.back = function() {      
      if (menuData.previousState !== null) {
        $state.go(menuData.previousState.name, menuData.previousState.data);
      }
    };
  }

})();
